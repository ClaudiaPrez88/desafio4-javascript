// Arreglos

const venta = [
    {
        src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        nombre: "Apartamento de lujo en zona exclusiva",
        descripcion:"Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion:" 123 Luxury Lane,Prestige Suburb, CA 45678",
        habitaciones:"4",
        baños:"4",
        costo:"5.000",
        smoke:false,
        pets:false

    },
    {
        src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        nombre: "Apartamento acogedor en la montaña",
        descripcion:"Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion:"789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones:"2",
        baños:"1",
        costo:"1.200",
        smoke:true,
        pets:true

    },
    {
        src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        nombre: "Penthouse de lujo con terraza panorámica",
        descripcion:"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones:"3",
        baños:"3",
        costo:"4.500",
        smoke:false,
        pets:true

    },
    {
        src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        nombre: "Penthouse de lujo con terraza panorámica",
        descripcion:"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones:"3",
        baños:"3",
        costo:"4.500",
        smoke:false,
        pets:true

    },

]


const alquiler = [
    {
        src:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        nombre: "Apartamento en el centro de la ciudad",
        descripcion:"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion:"123 Main Street, Anytown, CA 91234",
        habitaciones:"2",
        baños:"2",
        costo:"2.000",
        smoke:false,
        pets:true

    },
    {
        src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        nombre: "Apartamento luminoso con vista al mar",
        descripcion:"Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion:"456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones:"3",
        baños:"3",
        costo:"2,500",
        smoke:true,
        pets:true

    },
    {
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        nombre: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        descripcion:"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion:"123 Main Street, Anytown, CA 912349",
        habitaciones:"2",
        baños:"2",
        costo:"2.200",
        smoke:false,
        pets:false

    },
    {
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        nombre: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        descripcion:"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion:"123 Main Street, Anytown, CA 912349",
        habitaciones:"2",
        baños:"2",
        costo:"2.200",
        smoke:false,
        pets:false

    }

]

const pathname = window.location.pathname;


function componenteCard(
    scr,
    nombre,
    descripcion,
    ubicacion,
    habitaciones,
    baños,
    costo,
    smoke,
    pets
) {

    return `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${scr}"
                class="card-img-top"
                alt="Imagen"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${nombre}
                </h5>
                <p class="card-text">
                ${descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${habitaciones} |
                  <i class="fas fa-bath"></i> ${baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${costo}</p>
            <div>
                ${smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'} 
            </div>
            <div>
                ${pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
            </div>  
              </div>
            </div>
          </div>`;
}

console.log(pathname)

if (pathname.includes("index.html")) {

    // container
    const ventas_container = document.querySelector('#ventas_componente');
    const alquiler_container = document.querySelector('#alquiler_componente');


    // ventas

    venta.slice(0, 3).forEach(({src, nombre,  descripcion, ubicacion, habitaciones,baños, costo, smoke, pets }) => ventas_container.innerHTML += componenteCard(src, nombre, descripcion, ubicacion, habitaciones, baños, costo, smoke, pets))


    // alquiler

    alquiler.slice(0, 3).forEach(({ src,nombre,  descripcion, ubicacion, habitaciones,baños, costo, smoke, pets }) => alquiler_container.innerHTML += componenteCard(src, nombre, descripcion, ubicacion, habitaciones,baños, costo, smoke, pets))

} 

if (pathname.includes("propiedades_venta.html")) {

    // container
    const ventas2_container = document.querySelector('#ventas_componente2');


    // ventas

    venta.forEach(({src, nombre,  descripcion, ubicacion, habitaciones,baños, costo, smoke, pets }) => ventas2_container.innerHTML += componenteCard(src, nombre, descripcion, ubicacion, habitaciones, baños, costo, smoke, pets))



} 
if (pathname.includes("propiedades_alquiler.html")) {

    // container
    const alquiler3_container = document.querySelector('#alquiler3_componente');



    // alquiler

    alquiler.forEach(({ src,nombre,  descripcion, ubicacion, habitaciones,baños, costo, smoke, pets }) => alquiler3_container.innerHTML += componenteCard(src, nombre, descripcion, ubicacion, habitaciones,baños, costo, smoke, pets))

} 