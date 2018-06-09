/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationClientPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};
var authenticationProfesorPromise = function (sessionService) {
    return sessionService.authenticationPromise(3);
};
var authenticationAlumnoPromise = function (sessionService) {
    return sessionService.authenticationPromise(4);
};
var authenticationVisitantePromise = function (sessionService) {
    return sessionService.authenticationPromise(5);
};
trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/gestion', {templateUrl: 'js/system/shared/gestion.html', controller: 'GestionController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/newalumno/9/:codigo', {templateUrl: 'js/app/usuario/9/newalumno.html', controller: 'UsuarioNewalumno9Controller', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------4-5
        $routeProvider.when('/usuario/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/usuario/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        //------------
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/3/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView3Controller', resolve: {auth: authenticationProfesorPromise}});
        $routeProvider.when('/tipousuario/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/tipousuario/5/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView5Controller', resolve: {auth: authenticationVisitantePromise}});

        //historia------------
        $routeProvider.when('/historia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'HistoriaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'HistoriaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'HistoriaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'HistoriaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'HistoriaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/xjuego/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'HistoriaXjuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/xjuego/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'HistoriaXjuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/xjuego/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'HistoriaXjuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/1/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/historia/1/xjuego/plist.html', controller: 'HistoriaXjuegoPListGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/historia/4/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/historia/4/xjuego/plist.html', controller: 'HistoriaXjuegoPListGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});

        //clase------------
        $routeProvider.when('/clase/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ClaseView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/clase/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClaseNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/clase/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClaseEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/clase/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ClaseRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/clase/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClasePList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //juego------------
        $routeProvider.when('/juego/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'JuegoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/viewgenerico/:id', {templateUrl: 'js/app/juego/1/view.html', controller: 'JuegoViewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'JuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'JuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'JuegoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/plistgenerico/:page?/:rpp?', {templateUrl: 'js/app/juego/1/plist.html', controller: 'JuegoPListGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'JuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'JuegoXusuarioPlist1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newx.html', controller: 'JuegoXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/juego/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/editx.html', controller: 'JuegoXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/juego/4/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'JuegoView4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/juego/4/viewgenerico/:id', {templateUrl: 'js/app/juego/4/view.html', controller: 'JuegoViewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/juego/4/plistgenerico/:page?/:rpp?', {templateUrl: 'js/app/juego/4/plist.html', controller: 'JuegoPListGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/juego/4/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'JuegoXusuarioPlist4Controller', resolve: {auth: authenticationAlumnoPromise}});

        //plataforma------------
        $routeProvider.when('/plataforma/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PlataformaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataforma/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataforma/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataforma/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PlataformaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataforma/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlataformaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});


        //plataforma juego------------
        $routeProvider.when('/plataformajuego/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PlataformaJuegoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformaJuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformaJuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PlataformaJuegoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlataformaJuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/xjuego/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlataformajuegoXjuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/xjuego/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformajuegoXjuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/xjuego/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformajuegoXjuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/xplataforma/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PlataformajuegoXplataformaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/xplataforma/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformajuegoXplataformaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/plataformajuego/1/xplataforma/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PlataformajuegoXplataformaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});


        //personaje------------
        $routeProvider.when('/personaje/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'PersonajeView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/viewgenerico/:id', {templateUrl: 'js/app/personaje/1/view.html', controller: 'PersonajeViewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PersonajeNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PersonajeEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'PersonajeRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PersonajePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xjuego/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PersonajeXjuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xjuego/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PersonajeXjuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xjuego/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PersonajeXjuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/personaje/1/xjuego/plist.html', controller: 'PersonajeXjuegoPListGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xclase/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'PersonajeXclasePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xclase/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PersonajeXClaseNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/personaje/1/xclase/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'PersonajeXClaseEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/personaje/4/viewgenerico/:id', {templateUrl: 'js/app/personaje/4/view.html', controller: 'PersonajeViewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/personaje/4/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/personaje/4/xjuego/plist.html', controller: 'PersonajeXjuegoPListGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});


        //noticia------------
        $routeProvider.when('/noticia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'NoticiaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/viewgenerico/:id', {templateUrl: 'js/app/noticia/1/view.html', controller: 'NoticiaViewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/new/:id?', {templateUrl: 'js/app/guia/1/xjuego/newedit.html', controller: 'NoticiaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/newgenerico/:id?', {templateUrl: 'js/app/guia/1/xjuego/newedit.html', controller: 'NoticiaNewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'NoticiaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'NoticiaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'NoticiaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xjuego/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'NoticiaXjuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/noticia/1/xjuego/plist.html', controller: 'NoticiaXjuegoPListGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xjuego/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'NoticiaXjuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xjuego/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'NoticiaXjuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'NoticiaXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'NoticiaXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/noticia/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'NoticiaXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/noticia/4/viewgenerico/:id', {templateUrl: 'js/app/noticia/4/view.html', controller: 'NoticiaViewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/noticia/4/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/noticia/4/xjuego/plist.html', controller: 'NoticiaXjuegoPListGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/noticia/4/newgenerico/:id?', {templateUrl: 'js/app/noticia/4/xjuego/newedit.html', controller: 'NoticiaNewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});


        //guia------------
        $routeProvider.when('/guia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GuiaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/viewgenerico/:id', {templateUrl: 'js/app/guia/1/view.html', controller: 'GuiaViewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/new/:id?', {templateUrl: 'js/app/guia/1/xjuego/newedit.html', controller: 'GuiaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/newgenerico/:id?', {templateUrl: 'js/app/guia/1/xjuego/newedit.html', controller: 'GuiaNewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GuiaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GuiaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GuiaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xjuego/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GuiaXjuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/guia/1/xjuego/plist.html', controller: 'GuiaXjuegoPListGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xjuego/newx/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GuiaXjuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xjuego/newxgenerico/:id?', {templateUrl: 'js/app/guia/1/xjuego/newedit.html', controller: 'GuiaXjuegoNewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xjuego/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GuiaXjuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GuiaXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GuiaXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/guia/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GuiaXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        
        
        $routeProvider.when('/guia/4/xjuego/plistxgenerico/:id/:page?/:rpp?', {templateUrl: 'js/app/guia/4/xjuego/plist.html', controller: 'GuiaXjuegoPListGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/guia/4/viewgenerico/:id', {templateUrl: 'js/app/guia/4/view.html', controller: 'GuiaViewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});
        $routeProvider.when('/guia/4/newgenerico/:id?', {templateUrl: 'js/app/guia/4/xjuego/newedit.html', controller: 'GuiaNewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});

        //generojuego------------
        $routeProvider.when('/generojuego/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GenerojuegoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/generojuego/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GenerojuegoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/generojuego/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GenerojuegoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/generojuego/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GenerojuegoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/generojuego/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GenerojuegoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});


        //genero------------
        $routeProvider.when('/genero/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GeneroView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GeneroNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GeneroEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GeneroRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/genero/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GeneroPList1Controller', resolve: {auth: authenticationAdministratorPromise}});

        //comentarionoticia------------
        $routeProvider.when('/comentarionoticia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ComentarionoticiaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/new/:id?', {templateUrl: 'js/app/comentarionoticia/1/xnoticia/newedit.html', controller: 'ComentarionoticiaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/newgenerico/:id?', {templateUrl: 'js/app/comentarionoticia/1/xnoticia/newedit.html', controller: 'ComentarionoticiaNewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarionoticiaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ComentarionoticiaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComentarionoticiaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComentarionoticiaXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarionoticiaXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarionoticiaXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/xnoticia/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComentarionoticiaXnoticiaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/xnoticia/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarionoticiaXnoticiaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarionoticia/1/xnoticia/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarionoticiaXnoticiaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/comentarionoticia/4/newgenerico/:id?', {templateUrl: 'js/app/comentarionoticia/4/xnoticia/newedit.html', controller: 'ComentarionoticiaNewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});


        //comentarioguia------------
        $routeProvider.when('/comentarioguia/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ComentarioguiaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/new/:id?', {templateUrl: 'js/app/comentarioguia/1/xguia/newedit.html', controller: 'ComentarioguiaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/newgenerico/:id?', {templateUrl: 'js/app/comentarioguia/1/xguia/newedit.html', controller: 'ComentarioguiaNewGenerico1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarioguiaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ComentarioguiaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComentarioguiaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComentarioguiaXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarioguiaXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarioguiaXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/xguia/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ComentarioguiaXguiaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/xguia/newx/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarioguiaXguiaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/comentarioguia/1/xguia/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ComentarioguiaXguiaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});

        $routeProvider.when('/comentarioguia/4/newgenerico/:id?', {templateUrl: 'js/app/comentarioguia/4/xguia/newedit.html', controller: 'ComentarioguiaNewGenerico4Controller', resolve: {auth: authenticationAlumnoPromise}});


        $routeProvider.otherwise({redirectTo: '/'});
    }]);
