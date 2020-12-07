const functions = require('firebase-functions');
const admin = require('firebase-admin');

const FieldValue = require('firebase-admin').firestore.FieldValue;

admin.initializeApp();

exports.CREATE_Membro = functions.firestore.document('/grupos/{grupoId}/membros/{membroId}').onCreate(async (snap, context) => {
    try {
        const usuario = await admin.auth().getUserByEmail(context.params.membroId);

        if(usuario != null) {
            let criador;

            const grupoRef = await admin.firestore().collection("grupos").doc(context.params.grupoId);
            const membros = await grupoRef.collection("membros").get();
            const grupo = await grupoRef.get();
            const usuarioRef = admin.firestore().collection('usuarios').doc(usuario.uid);
            
            if(membros.size == 1) {
                criador = true;
                await snap.ref.update({ nome: usuario.displayName, criador: true });
            } else {
                criador = false;
                await snap.ref.update({ nome: usuario.displayName, criador: false });
            }

            if(!criador) {
                functions.logger.log('Usuário encontrado para envio de mensagem', context.params.grupoId, context.params.membroId, usuario.uid);
                
                return usuarioRef.collection('mensagens').doc().set({
                    titulo: `Permissão 🔑`,
                    mensagem: `Você recebeu permissão de acesso para o grupo ${grupo.data().nome}.`,
                    convite: true,
                    grupoNome: grupo.data().nome,
                    grupo: context.params.grupoId,
                    data: FieldValue.serverTimestamp(),
                    lida: false
                });
            } else {
                functions.logger.log('Mensagem não enviada, usuário é o criador do grupo', context.params.grupoId, context.params.membroId, usuario.uid);

                return 0;
            }
        } else {
            functions.logger.log('Usuário não encontrado para envio de mensagem', context.params.grupoId, context.params.membroId, context.params.membroId);

            return 0;
        }
    } catch (error) {
        functions.logger.error('Erro interno', error);

        return 0;
    }
});

exports.CREATE_Usuario = functions.auth.user().onCreate(async (usuario) => {
    try {    
        const usuarioRef = admin.firestore().collection("usuarios").doc(usuario.uid);
        
        await usuarioRef.set({
            email: usuario.email
        });

        return usuarioRef.collection('mensagens').doc().set({
            titulo: `Olá 👋`,
            mensagem: `Agora você faz parte do DotFin e pode controlar seus gastos de forma mais eficiente, crie um novo grupo de gastos e comece agora mesmo!`,
            convite: false,
            data: FieldValue.serverTimestamp(),
            lida: false
        });
    } catch (error) {
        functions.logger.error('Erro interno', error);

        return 0;
    }
});
