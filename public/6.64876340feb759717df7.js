(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zrcO:function(e,n,t){"use strict";t.r(n),t.d(n,"UsersModule",(function(){return h}));var o=t("ofXK"),c=t("tyNb"),r=t("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-user-detail"]],decls:2,vars:0,template:function(e,n){1&e&&(r.Ob(0,"p"),r.pc(1,"user-detail works!"),r.Nb())},styles:[""]}),e})();var s=t("AytR"),i=t("tk/3"),d=t("lJxs");let p=(()=>{class e{constructor(e){this.http=e}getUsers(){const e=new i.c({"Content-type":"application/json",Authorization:localStorage.getItem("token")});return this.http.get(s.a.API_URL+"users",{headers:e}).pipe(Object(d.a)(e=>e.users))}getUser(){}postUser(e){return this.http.post(s.a.API_URL+"users",e)}}return e.\u0275fac=function(n){return new(n||e)(r.Sb(i.a))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=t("bSwM"),l=t("bTqV"),u=t("STbY"),m=t("NFeN");let _=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-user"]],inputs:{user:"user"},decls:42,vars:3,consts:[[1,"owned-card"],[1,"owned-card__header"],[1,"owned-card__header--select"],[1,"owned-card__header--menu"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],["mat-menu-item","","disabled",""],[1,"owner-card__image"],["src","https://randomuser.me/api/portraits/women/44.jpg","alt",""],[1,"owned-card__info"],[1,"owned-card__socials"],[1,"owned-card__socials--facebook"],[1,"owned-card__socials--twitter"]],template:function(e,n){if(1&e&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Kb(2,"mat-checkbox",2),r.Ob(3,"div",3),r.Ob(4,"button",4),r.Ob(5,"mat-icon"),r.pc(6,"more_vert"),r.Nb(),r.Nb(),r.Ob(7,"mat-menu",null,5),r.Ob(9,"button",6),r.Ob(10,"mat-icon"),r.pc(11,"dialpad"),r.Nb(),r.Ob(12,"span"),r.pc(13,"Redial"),r.Nb(),r.Nb(),r.Ob(14,"button",7),r.Ob(15,"mat-icon"),r.pc(16,"voicemail"),r.Nb(),r.Ob(17,"span"),r.pc(18,"Check voice mail"),r.Nb(),r.Nb(),r.Ob(19,"button",6),r.Ob(20,"mat-icon"),r.pc(21,"notifications_off"),r.Nb(),r.Ob(22,"span"),r.pc(23,"Disable alerts"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(24,"div",8),r.Kb(25,"img",9),r.Nb(),r.Ob(26,"div",10),r.Ob(27,"span"),r.pc(28),r.Nb(),r.Ob(29,"span"),r.pc(30),r.Nb(),r.Nb(),r.Ob(31,"div",11),r.Ob(32,"div",12),r.Ob(33,"small"),r.pc(34,"Clientes: "),r.Nb(),r.Ob(35,"strong"),r.pc(36," 21313"),r.Nb(),r.Nb(),r.Ob(37,"div",13),r.Ob(38,"small"),r.pc(39,"Ventas: "),r.Nb(),r.Ob(40,"strong"),r.pc(41," 123"),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e){const e=r.fc(8);r.zb(4),r.cc("matMenuTriggerFor",e),r.zb(24),r.qc(n.user.name),r.zb(2),r.qc(n.user.email)}},directives:[b.a,l.a,u.c,m.a,u.d,u.a],styles:[".owned-card[_ngcontent-%COMP%]{position:relative;padding:5px;display:flex;max-width:280px;border:1px solid #ccc;border-radius:8px;align-items:center;flex-direction:column}@media (max-width:767px){.owned-card[_ngcontent-%COMP%]{max-width:100%}}.owned-card__header[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;align-items:center;top:15px;margin-left:5px}.owned-card__header--menu[_ngcontent-%COMP%]{position:absolute;right:0}.owned-card__header--select[_ngcontent-%COMP%]{position:absolute;left:0}.owner-card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.owned-card__info[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column}.owned-card__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{margin:5px}.owned-card-__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){margin:10px}.owned-card__socials[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;justify-content:space-around;margin:10px 0;border-top:1px solid #ccc}.owned-card__socials[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:10px;display:flex;align-items:center}.owned-card__socials--facebook[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .owned-card__socials--instagram[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .owned-card__socials--twitter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}"]}),e})();function g(e,n){if(1&e&&(r.Ob(0,"div",2),r.Kb(1,"app-user",3),r.Nb()),2&e){const e=n.$implicit;r.zb(1),r.cc("user",e)}}const O=[{path:"",component:(()=>{class e{constructor(e){this.userService=e}ngOnInit(){this.userService.getUsers().subscribe(e=>{this.users=e})}}return e.\u0275fac=function(n){return new(n||e)(r.Jb(p))},e.\u0275cmp=r.Db({type:e,selectors:[["app-users"]],decls:2,vars:1,consts:[[1,"d-flex",2,"display","flex","flex-wrap","wrap"],["style","margin:10px","class","col-md-3 col-sm-3 col-xs-12",4,"ngFor","ngForOf"],[1,"col-md-3","col-sm-3","col-xs-12",2,"margin","10px"],[3,"user"]],template:function(e,n){1&e&&(r.Ob(0,"div",0),r.oc(1,g,2,1,"div",1),r.Nb()),2&e&&(r.zb(1),r.cc("ngForOf",n.users))},directives:[o.i,_],styles:[""]}),e})()},{path:":id",component:a}];let f=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(n){return new(n||e)},imports:[[c.b.forChild(O)],c.b]}),e})();var w=t("hctd"),x=t("pKmL");let h=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(n){return new(n||e)},imports:[[o.b,f,x.a,w.a]]}),e})()}}]);