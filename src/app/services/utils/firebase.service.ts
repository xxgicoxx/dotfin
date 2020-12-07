import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';
import * as firebase from 'firebase/app';

import { UsuarioModel } from 'src/app/models/usuario';
import { ContaModel } from 'src/app/models/conta';
import { GrupoModel } from 'src/app/models/grupo';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private CONTAS = 'contas';
  private FECHADAS = 'fechadas';
  private GRUPOS = 'grupos';
  private USUARIOS = 'usuarios';
  private MEMBROS = 'membros';
  private MENSAGENS = 'mensagens';

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) { }

  // Auth
  async criaUsuario(usuario: UsuarioModel) {
    try {
      const usuarioCriado = await this.angularFireAuth.createUserWithEmailAndPassword(usuario.email, usuario.senha);

      await usuarioCriado.user.updateProfile({ displayName: usuario.nome });
      await usuarioCriado.user.reload();
      await usuarioCriado.user.sendEmailVerification();
      await this.sair();

      return usuarioCriado;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async login(usuario: UsuarioModel) {
    try {
      return this.angularFireAuth.signInWithEmailAndPassword(usuario.email, usuario.senha);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async atualizaSenha(senha: string, novaSenha: string) {
    try {
      const usuarioAtual = await this.angularFireAuth.currentUser;
      await this.angularFireAuth.signInWithEmailAndPassword(usuarioAtual.email, senha);

      return usuarioAtual.updatePassword(novaSenha);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async verificacao() {
    try {
      const usuario = await this.angularFireAuth.currentUser;

      return usuario.sendEmailVerification();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async recuperar(usuario: UsuarioModel) {
    try {
      return this.angularFireAuth.sendPasswordResetEmail(usuario.email);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async sair() {
    try {
      return this.angularFireAuth.signOut();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  // Add
  async criaGrupo(usuario: string, email: string, grupo: GrupoModel) {
    try {
      const grupoRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc();

      await grupoRef.collection('membros').doc(email).set({});
      await grupoRef.set(grupo.toPlainObj());

      grupo.referencia = grupoRef.id;

      return this.adicionaGrupo(usuario, grupo);
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async adicionaGrupo(usuario: string, grupo: GrupoModel) {
    try {
      const usuarioRef = this.angularFirestore.firestore.collection(this.USUARIOS).doc(usuario);
      return usuarioRef.collection(this.GRUPOS).add(grupo.toPlainObj());
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async adicionaMembro(grupo: string, usuario: string) {
    try {
      const grupoRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo);
      return grupoRef.collection('membros').doc(usuario).set({});
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async criaConta(grupo: string, conta: ContaModel) {
    try {
      const grupoRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo);
      return grupoRef.collection(this.CONTAS).add(conta.toPlainObj());
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async adicionaFechamento(grupo: string, descricao: string) {
    try {
      const contas = await (await this.buscaContas(grupo)).get();

      const batch = this.angularFirestore.firestore.batch();
      const usuarioRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo);
      const fechadasRef = usuarioRef.collection(this.FECHADAS).doc();

      contas.forEach(async (conta) => {
        const lancamentoRef = fechadasRef.collection('lancamentos').doc();
        const contaRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo).collection(this.CONTAS).doc(conta.id);

        const contaModel: ContaModel = plainToClass(ContaModel, { ...conta.data(), ...{ referencia: conta.id } });

        batch.set(fechadasRef, {
          descricao,
          total: firebase.firestore.FieldValue.increment(contaModel.valor * contaModel.quantidade),
          data: firebase.firestore.FieldValue.serverTimestamp()
        }, {
          merge: true
        });

        batch.set(lancamentoRef, contaModel.toPlainObj());

        batch.delete(contaRef);
      });

      return batch.commit();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  // Get
  async buscaGrupos(usuario: string) {
    try {
      const contasRef = this.angularFirestore.firestore.collection(this.USUARIOS).doc(usuario).collection(this.GRUPOS);
      return contasRef;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async buscaMembro(grupo: string, membro: string) {
    try {
      const contasRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo).collection(this.MEMBROS).doc(membro);
      return contasRef;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async buscaMembros(grupo: string) {
    try {
      const contasRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo).collection(this.MEMBROS);
      return contasRef;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async buscaContas(grupo: string) {
    try {
      const contasRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo).collection(this.CONTAS);
      return contasRef.orderBy('data', 'desc').orderBy('descricao', 'asc');
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async buscaContasFechadas(grupo: string) {
    try {
      const fechadasRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo).collection(this.FECHADAS);
      return fechadasRef.orderBy('descricao', 'asc');
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async buscaNotificacoes(usuario: string) {
    try {
      const notificacoesRef = this.angularFirestore.firestore.collection(this.USUARIOS).doc(usuario).collection(this.MENSAGENS);
      return notificacoesRef.limit(30).orderBy('data', 'desc');
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  // Delete
  async deletaGrupo(usuario: string, grupo: string) {
    try {
      const usuarioRef = this.angularFirestore.firestore.collection(this.USUARIOS).doc(usuario);
      return usuarioRef.collection(this.GRUPOS).doc(grupo).delete();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async deletaMembro(grupo: string, membro: string) {
    try {
      const grupoRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo);
      return grupoRef.collection(this.MEMBROS).doc(membro).delete();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async deletaConta(grupo: string, conta: string) {
    try {
      const grupoRef = this.angularFirestore.firestore.collection(this.GRUPOS).doc(grupo);
      return grupoRef.collection(this.CONTAS).doc(conta).delete();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  async deletaNotificacao(usuario: string, notificacao: string) {
    try {
      const notificacaoRef = this.angularFirestore.firestore.collection(this.USUARIOS).doc(usuario).collection(this.MENSAGENS);
      return notificacaoRef.doc(notificacao).delete();
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}
