/* Nuestra casa: solo sirve para enseñar avisos en el celular y abrir la página al tocarlos */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  const url=new URL("./#cartas",self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>{
    const w=ws.find(x=>x.url.startsWith(self.registration.scope));
    return w?w.focus().then(()=>w.navigate?w.navigate(url):w):self.clients.openWindow(url);
  }));
});
