import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MembroResolveService } from './services/resolver/membro-resolve.service';
import { AuthResolveService } from './services/resolver/auth-resolve.service';
import { LoginGuard } from './services/guards/login.guard';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [

  // Páginas
  {
    path: '',
    loadChildren: () => import('./views/usuario-login/usuario-login.module').then( m => m.LoginPageModule),
    canActivate: [ LoginGuard ]
  },
  {
    path: 'usuario-registro',
    loadChildren: () => import('./views/usuario-registro/usuario-registro.module').then( m => m.UsuarioRegistroPageModule)
  },
  {
    path: 'usuario-login',
    loadChildren: () => import('./views/usuario-login/usuario-login.module').then( m => m.LoginPageModule),
    canActivate: [ LoginGuard ]
  },
  {
    path: 'usuario-recuperacao',
    loadChildren: () => import('./views/usuario-recuperacao/usuario-recuperacao.module').then( m => m.UsuarioRecuperacaoPageModule)
  },
  {
    path: 'usuario-configuracoes',
    loadChildren: () => import('./views/usuario-configuracoes/usuario-configuracoes.module').then( m => m.UsuarioConfiguracoesPageModule),
    canActivate: [ AuthGuard ],
    resolve: { usuario: AuthResolveService }
  },
  {
    path: 'lista-grupos',
    loadChildren: () => import('./views/lista-grupos/lista-grupos.module').then( m => m.ListaGruposPageModule),
    canActivate: [ AuthGuard ],
    resolve: { usuario: AuthResolveService }
  },
  {
    path: 'lista-contas',
    loadChildren: () => import('./views/lista-contas/lista-contas.module').then( m => m.ListaContasPageModule),
    canActivate: [ AuthGuard ],
    resolve: { usuario: AuthResolveService, membro: MembroResolveService }
  },
  {
    path: 'lista-notificacoes',
    loadChildren: () => import('./views/lista-notificacoes/lista-notificacoes.module').then( m => m.ListaNotificacoesPageModule),
    canActivate: [ AuthGuard ],
    resolve: { usuario: AuthResolveService }
  },

  // Modals
  {
    path: 'cria-grupo',
    loadChildren: () => import('./views/modal/cria-grupo/cria-grupo.module').then( m => m.CriaGrupoPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'cria-conta',
    loadChildren: () => import('./views/modal/cria-conta/cria-conta.module').then( m => m.CriaContaPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'adiciona-fechamento',
    loadChildren: () => import('./views/modal/adiciona-fechamento/adiciona-fechamento.module').then( m => m.AdicionaFechamentoPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'adiciona-membro',
    loadChildren: () => import('./views/modal/adiciona-membro/adiciona-membro.module').then( m => m.AdicionaMembroPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'adiciona-grupo',
    loadChildren: () => import('./views/modal/adiciona-grupo/adiciona-grupo.module').then( m => m.AdicionaGrupoPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'lista-membros',
    loadChildren: () => import('./views/modal/lista-membros/lista-membros.module').then( m => m.ListaMembrosPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'lista-informacoes',
    loadChildren: () => import('./views/modal/lista-informacoes/lista-informacoes.module').then( m => m.ListaInformacoesPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'lista-contas-fechadas',
    loadChildren: () => import('./views/modal/lista-contas-fechadas/lista-contas-fechadas.module').then( (m) => {
      return m.ListaContasFechadasPageModule;
    }),
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
