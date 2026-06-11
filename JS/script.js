
const PAGES=['inicio','nosotros','producto','exportacion','mercado','video','rastreo','envio','contacto'];
function goTo(id,navEl){
  closeNav();
  const current=document.querySelector('.page.active');
  if(current&&current.id!=='pg-'+id){
    current.style.transition='opacity .3s ease,transform .3s ease';
    current.style.opacity='0';current.style.transform='translateY(-24px)';
    setTimeout(()=>{
      current.classList.remove('active');current.style.opacity='';current.style.transform='';current.style.transition='';
      const pg=document.getElementById('pg-'+id);
      if(pg){
        pg.style.opacity='0';pg.style.transform='translateY(40px)';pg.style.transition='none';
        pg.classList.add('active');window.scrollTo({top:0,behavior:'instant'});
        requestAnimationFrame(()=>{requestAnimationFrame(()=>{
          pg.style.transition='opacity .45s ease,transform .45s ease';pg.style.opacity='1';pg.style.transform='translateY(0)';
          setTimeout(()=>{pg.style.opacity='';pg.style.transform='';pg.style.transition='';triggerReveal();},460);
        });});
      }
    },300);
  }else if(!current){const pg=document.getElementById('pg-'+id);if(pg){pg.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}}
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const al=document.querySelector(`#side-nav .nav-link[data-page="${id}"]`);if(al)al.classList.add('active');
  document.querySelectorAll('.top-nav-link').forEach(l=>l.classList.remove('active'));
  const at=document.querySelector(`.top-nav-link[data-page="${id}"]`);if(at)at.classList.add('active');
}
function toggleNav(){document.getElementById('nav-toggle').classList.toggle('open');document.getElementById('side-nav').classList.toggle('open');document.getElementById('nav-overlay').classList.toggle('show')}
function closeNav(){document.getElementById('nav-toggle').classList.remove('open');document.getElementById('side-nav').classList.remove('open');document.getElementById('nav-overlay').classList.remove('show')}

const SLOGANS={es:['"Del corazón del Tolima a las mesas de Europa."','"Aguacate Hass colombiano, calidad que cruza fronteras."','"Frescura natural de Colombia para el mundo."'],en:['"From the heart of Tolima to the tables of Europe."','"Colombian Hass Avocado — quality that crosses borders."','"Natural freshness from Colombia to the world."'],de:['"Aus dem Herzen Tolimas auf die Tische Europas."','"Kolumbianische Hass-Avocado – Qualität ohne Grenzen."','"Natürliche Frische aus Kolumbien für die Welt."'],zh:['"从哥伦比亚托利马到欧洲的餐桌。"','"哥伦比亚哈斯牛油果，跨越国界的品质。"','"哥伦比亚的天然新鲜，奉献给世界。"']};
let sloganIdx=0,curLang='es';
function showSlogan(){const el=document.getElementById('slogan-text');if(!el)return;el.style.opacity=0;setTimeout(()=>{el.textContent=SLOGANS[curLang][sloganIdx];el.style.opacity=1;el.style.transition='opacity .5s';},300);}
showSlogan();

const T={es:{nav_sub:"Aguacate Hass Premium · Tolima",nav_inicio:"Inicio",nav_nosotros:"Quiénes Somos",nav_producto:"Nuestro Producto",nav_exportacion:"Exportación",nav_mercado:"Mercado Internacional",nav_video:"Nuestro Cultivo",nav_rastreo:"Rastreo",nav_envio:"Envío Internacional",nav_contacto:"Contacto",hero_badge:"🌎 Exportación · Colombia → Europa",hero_cta1:"Ver Producto",hero_cta2:"Contactar",nos_cap:"Tolima, Colombia · Finca propia",nos_label:"Quiénes Somos",nos_title:"Del Tolima\nal mundo",nos_desc:"Somos una empresa colombiana especializada en la producción, selección, empaque y exportación de Aguacate Hass premium. Desde las fértiles tierras del Tolima conectamos agricultores con los mercados europeos.",mis_t:"Misión",mis_d:"Exportar aguacate Hass colombiano de calidad premium, conectando agricultores con los mejores mercados de Europa.",vis_t:"Visión",vis_d:"Ser el proveedor líder de aguacate Hass colombiano en el mercado europeo para 2030.",v1:"🌱 Sostenibilidad",v2:"✅ Calidad",v3:"🤝 Confianza",v4:"📦 Trazabilidad",v5:"🌍 Responsabilidad",prod_lbl:"Nuestro Producto",prod_title:"Aguacate Hass\nPremium",prod_ct:"Aguacate Hass Colombiano",prod_cd:"Cultivado en las altitudes ideales del Tolima, nuestro aguacate Hass presenta pulpa cremosa y sabor excepcional.",sp1:"Variedad",sp2:"Origen",sp3:"Certificación",sp4:"T° Envío",b1:"Rico en grasas saludables (Omega 9)",b2:"Alto contenido de vitaminas B, C, E y K",b3:"Libre de pesticidas · Producción responsable",b4:"Calibres S, M, L disponibles",sizes_t:"Elige tu Caja",sz_s:"Pequeño",sz_m:"Mediano",sz_l:"Grande",cajas:"cajas",btn_cart:"🛒 Añadir al Carrito",cart_ok:"✅ ¡Añadido!",exp_lbl:"Proceso de Exportación",exp_title:"Del campo\na su mesa",price_lbl:"Precios de Exportación",price_sub:"Volúmenes y tiempos de entrega",e1t:"Producción",e1d:"Cultivo responsable",e2t:"Selección",e2d:"Clasificación por calibre y estándares",e3t:"Empaque",e3d:"Empaque especializado",e4t:"Cadena Frío",e4d:"Transporte refrigerado a 12°C",e5t:"Logística",e5d:"Envío directo a Berlín",ton:"Tonelada",tons:"Toneladas",dias:"días",mkt_lbl:"Mercado Internacional",mkt_title:"Berlín,\nnuestro destino",mkt_d:"Nos enfocamos en el mercado alemán.",c1:"Importadores de Frutas",c2:"Supermercados",c3:"Restaurantes Saludables",c4:"Tiendas Orgánicas",sup_t:"Cadenas objetivo en Alemania",bs1:"Habitantes",bs2:"Crecimiento mercado",bs3:"Destino exportación",bs4:"Mercado orgánico",vid_lbl:"Conócenos",vid_title:"Así nace nuestro\naguacate",vid_d:"Del corazón del Tolima, te mostramos el proceso.",trk_lbl:"Rastreo",trk_title:"Control paso a paso",trk_d:"Seguimiento en tiempo real.",trk_sim:"Simular Rastreo de Pedido",btn_track:"Rastrear",delivery_title:"Tiempos de Entrega por País",delivery_sub:"Desde Tolima, Colombia:",del_country:"País de Destino",del_time:"Tiempo Estimado",del_route:"Ruta",r1:"Pedido Recibido",r1d:"Confirmación inmediata",r2:"Selección",r2d:"Premium Hass escogido",r3:"Empaque",r3d:"Caja certificada",r4:"Despacho",r4d:"Envío internacional",r5:"Entregado",r5d:"Rastreo activo",ship_lbl:"Envío Internacional",ship_title:"Costos por País",ship_origin:"📍 Punto de origen: Tolima, Colombia",consult:"Consultar",ship_note:"<strong>Nota:</strong> Precios referenciales por tonelada métrica.",con_lbl:"Contacto",con_title:"Hablemos de\nnegocios",ch_email:"Correo Electrónico",ch_phone:"Teléfono",loc_city:"Tolima, Colombia",loc_d:" · Mejor tierra para Aguacate Hass",f1:"Nombre / Empresa",f2:"Correo Electrónico",f3:"País",f3opt:"Selecciona tu país",f4:"Volumen Requerido",f5:"Mensaje",f_send:"Enviar Solicitud →",cart_t:"Carrito",cart_empty:"Tu carrito está vacío",cart_total:"Total",cart_co:"Solicitar Pedido →",cart_detail:"Detalle de compra",back_home:"Volver al Inicio",om_title:"¡Pedido Enviado!",om_desc:"Tu solicitud fue recibida. Nuestro equipo te contactará en menos de 24 horas.",om_close:"Cerrar",cm_title:"¡Mensaje Enviado!",cm_desc:"Gracias por contactarnos.",contact_err:"Por favor completa todos los campos.",ship_sel_label:"Selecciona tu País de Destino"},en:{nav_sub:"Premium Hass Avocado · Tolima",nav_inicio:"Home",nav_nosotros:"About Us",nav_producto:"Our Product",nav_exportacion:"Export",nav_mercado:"International Market",nav_video:"Our Farm",nav_rastreo:"Tracking",nav_envio:"International Shipping",nav_contacto:"Contact",hero_badge:"🌎 Export · Colombia → Europe",hero_cta1:"View Product",hero_cta2:"Contact Us",nos_cap:"Tolima, Colombia · Own Farm",nos_label:"About Us",nos_title:"From Tolima\nto the world",nos_desc:"Colombian company specializing in Hass Avocado production, selection, packaging and export.",mis_t:"Mission",mis_d:"Export premium Colombian Hass avocado.",vis_t:"Vision",vis_d:"Leading Colombian Hass avocado supplier in Europe by 2030.",v1:"🌱 Sustainability",v2:"✅ Quality",v3:"🤝 Trust",v4:"📦 Traceability",v5:"🌍 Responsibility",prod_lbl:"Our Product",prod_title:"Hass Avocado\nPremium",prod_ct:"Colombian Hass Avocado",prod_cd:"Grown at ideal altitudes in Tolima.",sp1:"Variety",sp2:"Origin",sp3:"Certification",sp4:"Ship. T°",b1:"Rich in healthy fats (Omega 9)",b2:"High in vitamins B, C, E and K",b3:"Pesticide-free · Responsible production",b4:"Sizes S, M, L available",sizes_t:"Choose your Box",sz_s:"Small",sz_m:"Medium",sz_l:"Large",cajas:"boxes",btn_cart:"🛒 Add to Cart",cart_ok:"✅ Added!",exp_lbl:"Export Process",exp_title:"From the field\nto your table",price_lbl:"Export Prices",price_sub:"Volumes and delivery times",e1t:"Production",e1d:"Responsible cultivation",e2t:"Selection",e2d:"Classification by size and standards",e3t:"Packaging",e3d:"Specialized packaging",e4t:"Cold Chain",e4d:"Refrigerated at 12°C",e5t:"Logistics",e5d:"Direct shipping to Berlin",ton:"Ton",tons:"Tons",dias:"days",mkt_lbl:"International Market",mkt_title:"Berlin,\nour destination",mkt_d:"We focus on the German market.",c1:"Fruit Importers",c2:"Supermarkets",c3:"Healthy Restaurants",c4:"Organic Stores",sup_t:"Target chains in Germany",bs1:"Inhabitants",bs2:"Market growth",bs3:"Export destination",bs4:"Organic market",vid_lbl:"Meet Us",vid_title:"How our avocado\nis born",vid_d:"From Tolima, we show you the cultivation process.",trk_lbl:"Tracking",trk_title:"Step by step control",trk_d:"Real-time tracking from farm to door.",trk_sim:"Simulate Order Tracking",btn_track:"Track",delivery_title:"Delivery Times by Country",delivery_sub:"From Tolima, Colombia:",del_country:"Destination Country",del_time:"Estimated Time",del_route:"Route",r1:"Order Received",r1d:"Immediate confirmation",r2:"Selection",r2d:"Premium Hass chosen",r3:"Packaging",r3d:"Certified box",r4:"Dispatch",r4d:"International shipping",r5:"Delivered",r5d:"Active tracking",ship_lbl:"International Shipping",ship_title:"Costs by Country",ship_origin:"📍 Origin: Tolima, Colombia",consult:"Consult",ship_note:"<strong>Note:</strong> Reference prices per metric ton.",con_lbl:"Contact",con_title:"Let's talk\nbusiness",ch_email:"Email",ch_phone:"Phone",loc_city:"Tolima, Colombia",loc_d:" · Best land for Hass Avocado",f1:"Name / Company",f2:"Email",f3:"Country",f3opt:"Select your country",f4:"Required Volume",f5:"Message",f_send:"Send Request →",cart_t:"Cart",cart_empty:"Your cart is empty",cart_total:"Total",cart_co:"Request Order →",cart_detail:"Purchase summary",back_home:"Back to Home",om_title:"Order Sent!",om_desc:"Your request has been received. Our team will contact you within 24 hours.",om_close:"Close",cm_title:"Message Sent!",cm_desc:"Thank you for contacting us.",contact_err:"Please fill in all fields.",ship_sel_label:"Select your Destination Country"},de:{nav_sub:"Premium Hass Avocado · Tolima",nav_inicio:"Start",nav_nosotros:"Über Uns",nav_producto:"Produkt",nav_exportacion:"Export",nav_mercado:"Internationaler Markt",nav_video:"Unser Anbau",nav_rastreo:"Verfolgung",nav_envio:"Internationaler Versand",nav_contacto:"Kontakt",hero_badge:"🌎 Export · Kolumbien → Europa",hero_cta1:"Produkt ansehen",hero_cta2:"Kontaktieren",nos_cap:"Tolima, Kolumbien · Eigene Farm",nos_label:"Über Uns",nos_title:"Vom Tolima\nin die Welt",nos_desc:"Kolumbianisches Unternehmen für Hass-Avocado Export.",mis_t:"Mission",mis_d:"Kolumbianische Hass-Avocado exportieren.",vis_t:"Vision",vis_d:"Führender Anbieter bis 2030.",v1:"🌱 Nachhaltigkeit",v2:"✅ Qualität",v3:"🤝 Vertrauen",v4:"📦 Rückverfolgbarkeit",v5:"🌍 Verantwortung",prod_lbl:"Unser Produkt",prod_title:"Hass Avocado\nPremium",prod_ct:"Kolumbianische Hass-Avocado",prod_cd:"In idealen Höhenlagen Tolimas angebaut.",sp1:"Sorte",sp2:"Herkunft",sp3:"Zertifizierung",sp4:"Trans. T°",b1:"Reich an gesunden Fetten (Omega 9)",b2:"Reich an Vitaminen B, C, E und K",b3:"Pestizidfrei",b4:"Größen S, M, L verfügbar",sizes_t:"Wähle deine Kiste",sz_s:"Klein",sz_m:"Mittel",sz_l:"Groß",cajas:"Kisten",btn_cart:"🛒 In den Warenkorb",cart_ok:"✅ Hinzugefügt!",exp_lbl:"Exportprozess",exp_title:"Vom Feld\nauf Ihren Tisch",price_lbl:"Exportpreise",price_sub:"Mengen und Lieferzeiten",e1t:"Produktion",e1d:"Verantwortungsvoller Anbau",e2t:"Auswahl",e2d:"Klassifizierung",e3t:"Verpackung",e3d:"Spezialverpackung",e4t:"Kühlkette",e4d:"Gekühlter Transport bei 12°C",e5t:"Logistik",e5d:"Direktversand nach Berlin",ton:"Tonne",tons:"Tonnen",dias:"Tage",mkt_lbl:"Internationaler Markt",mkt_title:"Berlin,\nunser Ziel",mkt_d:"Wir konzentrieren uns auf den deutschen Markt.",c1:"Obstimporteure",c2:"Supermärkte",c3:"Gesunde Restaurants",c4:"Bioläden",sup_t:"Zielketten in Deutschland",bs1:"Einwohner",bs2:"Marktwachstum",bs3:"Exportziel",bs4:"Biomarkt",vid_lbl:"Lernen Sie uns kennen",vid_title:"So entsteht\nunsere Avocado",vid_d:"Aus Tolima zeigen wir Ihnen den Anbau.",trk_lbl:"Verfolgung",trk_title:"Schritt für Schritt",trk_d:"Echtzeit-Verfolgung.",trk_sim:"Bestellverfolgung simulieren",btn_track:"Verfolgen",delivery_title:"Lieferzeiten nach Land",delivery_sub:"Ab Tolima, Kolumbien:",del_country:"Zielland",del_time:"Geschätzte Zeit",del_route:"Route",r1:"Bestellung erhalten",r1d:"Sofortige Bestätigung",r2:"Auswahl",r2d:"Premium Hass ausgewählt",r3:"Verpackung",r3d:"Zertifizierte Kiste",r4:"Versand",r4d:"Internationaler Versand",r5:"Geliefert",r5d:"Aktive Verfolgung",ship_lbl:"Internationaler Versand",ship_title:"Kosten nach Land",ship_origin:"📍 Ursprung: Tolima, Kolumbien",consult:"Anfragen",ship_note:"<strong>Hinweis:</strong> Referenzpreise pro Tonne.",con_lbl:"Kontakt",con_title:"Sprechen wir\nüber Geschäfte",ch_email:"E-Mail",ch_phone:"Telefon",loc_city:"Tolima, Kolumbien",loc_d:" · Bestes Land für Hass-Avocado",f1:"Name / Unternehmen",f2:"E-Mail",f3:"Land",f3opt:"Land auswählen",f4:"Benötigte Menge",f5:"Nachricht",f_send:"Anfrage senden →",cart_t:"Warenkorb",cart_empty:"Ihr Warenkorb ist leer",cart_total:"Gesamt",cart_co:"Bestellung anfragen →",cart_detail:"Kaufübersicht",back_home:"Zurück zur Startseite",om_title:"Bestellung gesendet!",om_desc:"Ihre Anfrage wurde erhalten.",om_close:"Schließen",cm_title:"Nachricht gesendet!",cm_desc:"Vielen Dank.",contact_err:"Bitte füllen Sie alle Felder aus.",ship_sel_label:"Zielland auswählen"},zh:{nav_sub:"优质哈斯牛油果 · 托利马",nav_inicio:"首页",nav_nosotros:"关于我们",nav_producto:"我们的产品",nav_exportacion:"出口",nav_mercado:"国际市场",nav_video:"我们的农场",nav_rastreo:"追踪",nav_envio:"国际运输",nav_contacto:"联系",hero_badge:"🌎 出口 · 哥伦比亚 → 欧洲",hero_cta1:"查看产品",hero_cta2:"联系我们",nos_cap:"哥伦比亚托利马 · 自有农场",nos_label:"关于我们",nos_title:"从托利马\n走向世界",nos_desc:"专注于托利马优质哈斯牛油果的生产和出口。",mis_t:"使命",mis_d:"出口优质哥伦比亚哈斯牛油果。",vis_t:"愿景",vis_d:"到2030年成为欧洲市场领先供应商。",v1:"🌱 可持续性",v2:"✅ 质量",v3:"🤝 信任",v4:"📦 可追溯性",v5:"🌍 责任",prod_lbl:"我们的产品",prod_title:"哈斯牛油果\n优质品",prod_ct:"哥伦比亚哈斯牛油果",prod_cd:"在托利马理想海拔种植。",sp1:"品种",sp2:"产地",sp3:"认证",sp4:"运输温度",b1:"富含健康脂肪（Omega 9）",b2:"含有丰富维生素",b3:"无农药",b4:"提供 S、M、L 规格",sizes_t:"选择您的箱子",sz_s:"小",sz_m:"中",sz_l:"大",cajas:"箱",btn_cart:"🛒 加入购物车",cart_ok:"✅ 已添加！",exp_lbl:"出口流程",exp_title:"从田间\n到您的餐桌",price_lbl:"出口价格",price_sub:"数量和交货时间",e1t:"生产",e1d:"负责任的种植",e2t:"筛选",e2d:"严格分类",e3t:"包装",e3d:"专业包装",e4t:"冷链",e4d:"在12°C冷藏运输",e5t:"物流",e5d:"直接运往柏林",ton:"吨",tons:"吨",dias:"天",mkt_lbl:"国际市场",mkt_title:"柏林，\n我们的目的地",mkt_d:"我们专注于德国市场。",c1:"水果进口商",c2:"超市",c3:"健康餐厅",c4:"有机商店",sup_t:"德国目标连锁店",bs1:"居民",bs2:"市场增长",bs3:"出口目的地",bs4:"有机市场",vid_lbl:"了解我们",vid_title:"我们的牛油果\n是这样诞生的",vid_d:"展示种植和收获过程。",trk_lbl:"追踪",trk_title:"逐步控制",trk_d:"从农场到客户门口的实时追踪。",trk_sim:"模拟订单追踪",btn_track:"追踪",delivery_title:"各国交货时间",delivery_sub:"从哥伦比亚托利马出发：",del_country:"目的地国家",del_time:"预计时间",del_route:"路线",r1:"订单已接收",r1d:"立即确认",r2:"筛选",r2d:"选择优质哈斯",r3:"包装",r3d:"认证箱",r4:"发货",r4d:"国际运输",r5:"已送达",r5d:"主动追踪",ship_lbl:"国际运输",ship_title:"各国费用",ship_origin:"📍 起运地：哥伦比亚托利马",consult:"咨询",ship_note:"<strong>注意：</strong>参考价格每公吨。",con_lbl:"联系",con_title:"让我们谈谈\n合作",ch_email:"电子邮件",ch_phone:"电话",loc_city:"哥伦比亚托利马",loc_d:" · 哈斯牛油果最佳产地",f1:"姓名 / 公司",f2:"电子邮件",f3:"国家",f3opt:"选择国家",f4:"所需数量",f5:"留言",f_send:"发送询价 →",cart_t:"购物车",cart_empty:"您的购物车是空的",cart_total:"合计",cart_co:"提交订单 →",cart_detail:"购买明细",back_home:"返回首页",om_title:"订单已提交！",om_desc:"您的请求已收到。",om_close:"关闭",cm_title:"消息已发送！",cm_desc:"感谢您联系我们。",contact_err:"请填写所有字段。",ship_sel_label:"选择目的地国家"}};

function setLang(lang,btn){
  curLang=lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  const t=T[lang];if(!t)return;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(t[k]!==undefined){if(k==='ship_note')el.innerHTML=t[k];else el.textContent=t[k];}
  });
  showSlogan();
}

let selSz={es:'Caja Mediana 10kg',en:'Medium Box 10kg',de:'Mittlere Kiste 10kg',zh:'中箱 10kg',price:38};
let qty=1;
let cartData=[];

function selSize(el,nameEs,nameEn,nameDe,nameZh,price){
  document.querySelectorAll('.size-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  selSz={es:nameEs,en:nameEn,de:nameDe,zh:nameZh,price};
}

function chQty(d){qty=Math.max(1,qty+d);document.getElementById('qty-num').textContent=qty;}

function addCart(){
  cartData.push({es:selSz.es,en:selSz.en,de:selSz.de,zh:selSz.zh,price:selSz.price,qty:qty});
  refreshCart();updateProdCartBtn();
  const t=document.getElementById('add-toast');t.style.display='block';setTimeout(()=>t.style.display='none',2400);
  const panel=document.getElementById('prod-cart-panel');
  if(panel){panel.classList.add('show');renderProdCart();}
}

function refreshCart(){
  const body=document.getElementById('cart-body');
  const badge=document.getElementById('cart-badge');
  const total=document.getElementById('ct-price');
  const breakdown=document.getElementById('cart-breakdown');
  const breakdownRows=document.getElementById('breakdown-rows');
  const t=T[curLang]||T['es'];
  if(!cartData.length){
    body.innerHTML=`<div class="cart-empty-msg"><div class="ei"><img src="Aguacate1.jpg" style="width:90px;border-radius:12px;margin:0 auto 12px;opacity:.6"></div><p>${t.cart_empty}</p></div>`;
    badge.style.display='none';total.textContent='$0.00';breakdown.style.display='none';return;
  }
  let sum=0,cnt=0;
  body.innerHTML=cartData.map((it,i)=>{
    const name=it[curLang]||it.es;const sub=it.price*it.qty;sum+=sub;cnt+=it.qty;
    return `<div class="cart-item-row"><div class="ci-icon">🥑</div><div><div class="ci-name">${name}</div><div class="ci-detail">${t.cajas||'×'} ${it.qty} · $${it.price.toFixed(2)} c/u</div></div><div class="ci-price">$${sub.toFixed(2)}</div><button class="cart-item-del" onclick="removeCartItem(${i})" title="Eliminar">🗑</button></div>`;
  }).join('');
  badge.textContent=cnt;badge.style.display='flex';
  breakdown.style.display='block';
  let bRows=cartData.map(it=>{const name=it[curLang]||it.es;return `<div class="cb-row"><span>${name} ×${it.qty}</span><span>$${(it.price*it.qty).toFixed(2)}</span></div>`;}).join('');
  const cartSel=document.getElementById('cart-ship-country');const cartVal=cartSel?cartSel.value:'';
  let shipCostTotal=0;
  if(cartVal&&SHIPPING_DATA[cartVal]){
    const sd=SHIPPING_DATA[cartVal];const totalBoxes=cartData.reduce((a,b)=>a+b.qty,0);
    if(sd.costNum>0){shipCostTotal=sd.costNum*totalBoxes;bRows+=`<div class="cb-ship-row"><span>🚢 Envío ${sd.flag} ${sd.name}</span><span>$${shipCostTotal.toFixed(2)}</span></div>`;}
    else{bRows+=`<div class="cb-ship-row"><span>🚢 Envío ${sd.flag} ${sd.name}</span><span>Consultar</span></div>`;}
    bRows+=`<div style="font-size:.7rem;color:var(--txt-lt);padding:2px 0">⏱ ${sd.days} · ${sd.route}</div>`;
  }
  const grandTotal=sum+shipCostTotal;
  bRows+=`<div class="cb-row"><span>${t.cart_total||'Total'}</span><span>$${grandTotal.toFixed(2)}</span></div>`;
  breakdownRows.innerHTML=bRows;total.textContent='$'+grandTotal.toFixed(2);
}

function removeCartItem(idx){cartData.splice(idx,1);refreshCart();updateProdCartBtn();}
function toggleCart(){document.getElementById('cart-sidebar').classList.toggle('open');}

const SHIPPING_DATA={
  de:{flag:'🇩🇪',name:'Alemania',cost:'USD 12.50/caja',costNum:12.50,days:'25–45 días',route:'Bogotá → Hamburgo/Bremen'},
  nl:{flag:'🇳🇱',name:'Países Bajos',cost:'USD 13.00/caja',costNum:13.00,days:'28–48 días',route:'Bogotá → Rotterdam'},
  es:{flag:'🇪🇸',name:'España',cost:'USD 11.50/caja',costNum:11.50,days:'22–40 días',route:'Bogotá → Barcelona/Valencia'},
  fr:{flag:'🇫🇷',name:'Francia',cost:'USD 12.80/caja',costNum:12.80,days:'26–45 días',route:'Bogotá → Le Havre'},
  uk:{flag:'🇬🇧',name:'Reino Unido',cost:'USD 14.00/caja',costNum:14.00,days:'28–50 días',route:'Bogotá → Felixstowe'},
  cn:{flag:'🇨🇳',name:'China',cost:'Consultar',costNum:0,days:'35–60 días',route:'Bogotá → Shanghai/Shenzhen'},
  jp:{flag:'🇯🇵',name:'Japón',cost:'USD 18.50/caja',costNum:18.50,days:'38–65 días',route:'Bogotá → Tokyo/Osaka'},
  us:{flag:'🇺🇸',name:'Estados Unidos',cost:'USD 9.80/caja',costNum:9.80,days:'12–22 días',route:'Bogotá → Miami/Los Ángeles'},
  mx:{flag:'🇲🇽',name:'México',cost:'USD 7.50/caja',costNum:7.50,days:'8–15 días',route:'Bogotá → Ciudad de México'},
  br:{flag:'🇧🇷',name:'Brasil',cost:'USD 8.20/caja',costNum:8.20,days:'10–20 días',route:'Bogotá → São Paulo'},
  ca:{flag:'🇨🇦',name:'Canadá',cost:'USD 11.00/caja',costNum:11.00,days:'14–25 días',route:'Bogotá → Toronto/Vancouver'},
  au:{flag:'🇦🇺',name:'Australia',cost:'USD 22.00/caja',costNum:22.00,days:'45–75 días',route:'Bogotá → Sydney/Melbourne'}
};

const TRACKING_TEMPLATES={de:{days:35,city:'Hamburgo, Alemania'},nl:{days:38,city:'Rotterdam, Países Bajos'},es:{days:32,city:'Barcelona, España'},fr:{days:36,city:'Le Havre, Francia'},uk:{days:39,city:'Felixstowe, Reino Unido'},cn:{days:48,city:'Shanghai, China'},jp:{days:52,city:'Tokyo, Japón'},us:{days:17,city:'Miami, EE.UU.'},mx:{days:12,city:'Ciudad de México, México'},br:{days:15,city:'São Paulo, Brasil'},ca:{days:20,city:'Toronto, Canadá'},au:{days:60,city:'Sydney, Australia'}};

function updateShippingCost(){
  const sel=document.getElementById('ship-country-sel');const val=sel?sel.value:'';
  const display=document.getElementById('ship-cost-display');if(!display)return;
  if(!val||!SHIPPING_DATA[val]){display.classList.remove('show');return;}
  const d=SHIPPING_DATA[val];
  document.getElementById('scd-country').textContent=d.flag+' '+d.name;
  document.getElementById('scd-cost').textContent='🚢 Envío: '+d.cost;
  document.getElementById('scd-days').textContent='⏱ Tiempo estimado: '+d.days;
  document.getElementById('scd-route').textContent='📍 Ruta: '+d.route;
  display.classList.add('show');
  const cartSel=document.getElementById('cart-ship-country');if(cartSel){cartSel.value=val;refreshCart();}
  const pcpSel=document.getElementById('pcp-ship-country');if(pcpSel)pcpSel.value=val;
}

function updateTrackingCountry(){
  const sel=document.getElementById('trk-country-sel');const val=sel?sel.value:'';
  const info=document.getElementById('trk-country-info');if(!info)return;
  if(!val||!SHIPPING_DATA[val]){info.style.display='none';return;}
  const d=SHIPPING_DATA[val];
  document.getElementById('trk-country-name').textContent=d.flag+' '+d.name+' — '+d.days;
  document.getElementById('trk-country-time').textContent='📍 Ruta: '+d.route;
  document.getElementById('trk-country-route').textContent='⏱ Tiempo estimado: '+d.days;
  info.style.display='block';
  if(window.showDestinationMap)window.showDestinationMap(val);
}

function simTrack(){
  const val=document.getElementById('order-input').value.trim();
  if(!val){document.getElementById('order-input').style.borderColor='#cc4444';setTimeout(()=>document.getElementById('order-input').style.borderColor='',2000);return;}
  const countryVal=document.getElementById('trk-country-sel')?document.getElementById('trk-country-sel').value:'';
  if(!countryVal){alert('Por favor selecciona el país de destino de tu pedido.');return;}
  const d=SHIPPING_DATA[countryVal]||SHIPPING_DATA['de'];
  const trk=TRACKING_TEMPLATES[countryVal]||TRACKING_TEMPLATES['de'];
  const seed=val.split('').reduce((acc,c)=>acc+c.charCodeAt(0),0);
  const offsetDays=seed%15;
  const base=new Date(2026,0,5+offsetDays);
  const fmt=d=>d.toLocaleDateString('es-CO',{day:'2-digit',month:'short',year:'numeric'});
  const times=['08:22 AM','09:14 AM','10:05 AM','07:30 AM','11:45 AM','14:10 PM'];
  const t0=times[seed%times.length];const t1=times[(seed+2)%times.length];const t2=times[(seed+4)%times.length];
  const d1=new Date(base);const d2=new Date(base);d2.setDate(base.getDate()+2);
  const d3=new Date(base);d3.setDate(base.getDate()+3+(seed%3));
  const etaDate=new Date(base);etaDate.setDate(base.getDate()+trk.days+(seed%8));
  const timeline=document.getElementById('dynamic-timeline');
  if(timeline){
    timeline.innerHTML=`
      <div class="tl-item"><div class="tl-dot done"></div><div class="tl-text"><h5>Pedido Recibido</h5><p>${fmt(d1)} · ${t0} · Tolima, Colombia</p></div></div>
      <div class="tl-item"><div class="tl-dot done"></div><div class="tl-text"><h5>Selección Premium</h5><p>${fmt(d2)} · ${t1} · Planta Tolima</p></div></div>
      <div class="tl-item"><div class="tl-dot done"></div><div class="tl-text"><h5>Empaque y Despacho</h5><p>${fmt(d3)} · ${t2} · Centro Logístico</p></div></div>
      <div class="tl-item"><div class="tl-dot current"></div><div class="tl-text"><h5>En Tránsito Internacional</h5><p>${d.flag} ${trk.city} · Ref: ${val}</p></div></div>
      <div class="tl-item"><div class="tl-dot" style="background:rgba(0,0,0,.1)"></div><div class="tl-text"><h5 style="color:var(--txt-lt)">Entrega en ${trk.city}</h5><p>ETA: ${fmt(etaDate)} · ${d.days}</p></div></div>`;
  }
  document.getElementById('tracker-result').style.display='block';
  document.getElementById('tracker-result').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function checkoutOrder(){
  if(!cartData.length){alert(T[curLang].cart_empty||'Tu carrito está vacío');return;}
  const ref='GGC-'+Date.now().toString().slice(-6);
  document.getElementById('om-ref').textContent='Ref: '+ref;
  const t=T[curLang]||T['es'];
  document.querySelector('#order-modal [data-i18n="om_title"]').textContent=t.om_title;
  document.querySelector('#order-modal [data-i18n="om_desc"]').textContent=t.om_desc;
  document.querySelector('#order-modal [data-i18n="om_close"]').textContent=t.om_close;
  document.getElementById('order-modal').classList.add('show');
  cartData=[];refreshCart();updateProdCartBtn();
  document.getElementById('cart-sidebar').classList.remove('open');
}

function closeOrderModal(){document.getElementById('order-modal').classList.remove('show');}

function submitContact(){
  const name=document.getElementById('cf-name').value.trim();
  const email=document.getElementById('cf-email').value.trim();
  const country=document.getElementById('cf-country').value;
  const t=T[curLang]||T['es'];
  if(!name||!email||!country){alert(t.contact_err||'Por favor completa todos los campos.');return;}
  document.querySelector('#contact-modal [data-i18n="cm_title"]').textContent=t.cm_title;
  document.querySelector('#contact-modal [data-i18n="cm_desc"]').textContent=t.cm_desc;
  document.querySelector('#contact-modal [data-i18n="om_close"]').textContent=t.om_close;
  document.getElementById('contact-modal').classList.add('show');
  document.getElementById('cf-name').value='';document.getElementById('cf-email').value='';
  document.getElementById('cf-country').value='';document.getElementById('cf-message').value='';
}

function triggerReveal(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* Prod cart panel */
function isOnProductPage(){const pg=document.getElementById('pg-producto');return pg&&pg.classList.contains('active');}
function toggleProdCartPanel(){const panel=document.getElementById('prod-cart-panel');if(!panel)return;panel.classList.toggle('show');if(panel.classList.contains('show'))renderProdCart();}

function renderProdCart(){
  const pcpSel=document.getElementById('pcp-ship-country');
  const prodSel=document.getElementById('ship-country-sel');
  if(pcpSel&&!pcpSel.value&&prodSel&&prodSel.value)pcpSel.value=prodSel.value;
  const itemsEl=document.getElementById('pcp-items');const emptyEl=document.getElementById('pcp-empty');
  const breakdownEl=document.getElementById('pcp-breakdown');const totalEl=document.getElementById('pcp-total');
  const shipSel=document.getElementById('pcp-ship-country');
  if(!itemsEl)return;
  const shipCode=shipSel?shipSel.value:'';const lang=curLang;
  if(!cartData.length){emptyEl.style.display='block';itemsEl.innerHTML='';breakdownEl.style.display='none';if(totalEl)totalEl.textContent='$0.00';return;}
  emptyEl.style.display='none';
  itemsEl.innerHTML=cartData.map((it,i)=>{
    const name=it[lang]||it.es;const sub=it.price*it.qty;
    return `<div class="pcp-item"><span class="pcp-item-icon">🥑</span><div><div class="pcp-item-name">${name}</div><div class="pcp-item-detail">cajas ${it.qty} · $${it.price.toFixed(2)} c/u</div></div><span class="pcp-item-price">$${sub.toFixed(2)}</span><button class="pcp-item-del" onclick="pcpRemove(${i})">🗑</button></div>`;
  }).join('');
  const subtotal=cartData.reduce((a,b)=>a+b.price*b.qty,0);let shipCost=0,shipLine='';
  if(shipCode&&SHIPPING_DATA[shipCode]){
    const sd=SHIPPING_DATA[shipCode];const totalBoxes=cartData.reduce((a,b)=>a+b.qty,0);
    shipCost=sd.costNum>0?sd.costNum*totalBoxes:0;
    shipLine=`<div class="pb-row"><span>${sd.flag||''} Envío ${sd.name}</span><span style="color:var(--gold)">$${shipCost.toFixed(2)}</span></div><div style="font-size:.71rem;color:var(--txt-lt);padding:2px 0 4px">🕐 ${sd.days||''} · ${sd.route||''}</div>`;
  }
  const grand=subtotal+shipCost;
  breakdownEl.style.display='block';
  breakdownEl.innerHTML=cartData.map(it=>{const name=it[lang]||it.es;return `<div class="pb-row"><span>${name} ×${it.qty}</span><span>$${(it.price*it.qty).toFixed(2)}</span></div>`;}).join('')+shipLine+`<div class="pb-row"><span>Total</span><span>$${grand.toFixed(2)}</span></div>`;
  if(totalEl)totalEl.textContent='$'+grand.toFixed(2);
}

function pcpRemove(idx){cartData.splice(idx,1);updateProdCartBtn();renderProdCart();refreshCart();}

function pcpCheckout(){
  if(!cartData.length){alert('Tu carrito está vacío');return;}
  const lang=curLang;const pcpSel=document.getElementById('pcp-ship-country');
  const prodSel=document.getElementById('ship-country-sel');
  let shipCode=(pcpSel&&pcpSel.value)?pcpSel.value:(prodSel&&prodSel.value)?prodSel.value:'';
  const omItems=document.getElementById('om-items');const omShipRow=document.getElementById('om-ship-row');
  const omShipNote=document.getElementById('om-ship-note');const omTotal=document.getElementById('om-total');const omDetail=document.getElementById('om-detail');
  if(omItems){
    const subtotal=cartData.reduce((a,b)=>a+b.price*b.qty,0);let shipCost=0;
    omItems.innerHTML=cartData.map(it=>{const name=it[lang]||it.es;return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(0,0,0,.06)"><span>🥑 '+name+' ×'+it.qty+'</span><span style="font-weight:600;color:#1a3a1f;">$'+(it.price*it.qty).toFixed(2)+'</span></div>';}).join('');
    if(shipCode&&SHIPPING_DATA[shipCode]){const sd=SHIPPING_DATA[shipCode];const boxes=cartData.reduce((a,b)=>a+b.qty,0);shipCost=sd.costNum>0?sd.costNum*boxes:0;if(omShipRow){omShipRow.style.display='flex';omShipRow.innerHTML='<span>'+(sd.flag||'🚢')+' Envío a '+sd.name+'</span><span style="color:#c8a84b;">$'+shipCost.toFixed(2)+'</span>';}if(omShipNote)omShipNote.textContent='🕐 '+(sd.days||'')+' · '+(sd.route||'');}
    else{if(omShipRow)omShipRow.style.display='none';if(omShipNote)omShipNote.textContent='Selecciona un país de envío';}
    const grand=subtotal+shipCost;if(omTotal)omTotal.textContent='$'+grand.toFixed(2);if(omDetail)omDetail.style.display='block';
  }
  const ref='GGC-'+Date.now().toString().slice(-6);const omRef=document.getElementById('om-ref');if(omRef)omRef.textContent='Ref: '+ref;
  const t=(T&&T[lang])?T[lang]:{};
  const omTitle=document.querySelector('#order-modal [data-i18n="om_title"]');const omDesc=document.querySelector('#order-modal [data-i18n="om_desc"]');const omClose=document.querySelector('#order-modal [data-i18n="om_close"]');
  if(omTitle&&t.om_title)omTitle.textContent=t.om_title;if(omDesc&&t.om_desc)omDesc.textContent=t.om_desc;if(omClose&&t.om_close)omClose.textContent=t.om_close;
  document.getElementById('order-modal').classList.add('show');
  const panel=document.getElementById('prod-cart-panel');if(panel)panel.classList.remove('show');
  cartData=[];updateProdCartBtn();refreshCart();
}

function updateProdCartBtn(){
  const btn=document.getElementById('prod-cart-btn');const badge=document.getElementById('prod-cart-badge');if(!btn)return;
  const total=cartData.reduce((a,b)=>a+b.qty,0);
  if(total>0&&isOnProductPage()){btn.style.display='flex';if(badge)badge.textContent=total;}
  else{btn.style.display='none';const panel=document.getElementById('prod-cart-panel');if(panel)panel.classList.remove('show');}
}

const _origGoTo=window.goTo;
window.goTo=function(page,el){
  if(page!=='producto'){const panel=document.getElementById('prod-cart-panel');if(panel)panel.classList.remove('show');}
  if(typeof _origGoTo==='function')_origGoTo(page,el);
  setTimeout(updateProdCartBtn,50);
};

function playVideo(){document.getElementById('videoContainer').innerHTML=`<video controls autoplay style="width:100%;border-radius:15px;"><source src="Aguacate.mp4" type="video/mp4"></video>`;}

document.addEventListener('DOMContentLoaded',()=>{
  setLang('es',document.querySelector('.lang-btn.active'));
  triggerReveal();updateProdCartBtn();
  setInterval(()=>{sloganIdx=(sloganIdx+1)%3;showSlogan();},4000);
});




