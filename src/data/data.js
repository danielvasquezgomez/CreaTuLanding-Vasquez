const products = [
    {
        id: "plant001",
        name: "Ficus Rubi",
        description: "",
        price: "35000",
        stock: "25",
        image: "/img/ficus-rubi.JPG",
        category: "plantas"
    },
    {
        id: "plant002",
        name: "Yuca Triple",
        description: "",
        price: "18000",
        stock: "15",
        image: "/img/yuca-triple.JPG",
        category: "plantas"
    },
    {
        id: "plant003",
        name: "Potus Baby",
        description: "",
        price: "12000",
        stock: "18",
        image: "/img/potus-baby.JPG",
        category: "plantas"
    },
    {
        id: "plant004",
        name: "Sansevieria",
        description: "",
        price: "5000",
        stock: "18",
        image: "/img/sansevieria.JPG",
        category: "plantas" 
    },
    {
        id: "plant005",
        name: "Peperomia Tricolor",
        description: "",
        price: "8000",
        stock: "10",
        image: "/img/peperomia-tricolor.JPG",
        category: "plantas" 
    },
    {
        id: "plant006",
        name: "Strelitzia Mega",
        description: "",
        price: "21000",
        stock: "15",
        image: "/img/strelitzia-mega.JPG",
        category: "plantas" 
    },
    {
        id: "plant007",
        name: "Monstera Deliciosa",
        description: "",
        price: "20500",
        stock: "20",
        image: "/img/monstera-deliciosa.JPG",
        category: "plantas"
    },
    {
        id: "plant008",
        name: "Pilea",
        description: "",
        price: "6500",
        stock: "20",
        image: "/img/pilea.JPG",
        category: "plantas"
    },
    {
        id: "plant009",
        name: "Croton Baby",
        description: "",
        price: "10500",
        stock: "10",
        image: "/img/croton-baby.JPG",
        category: "plantas"
    },
    {
        id: "maceta001",
        name: "Esfera",
        description: "",
        price: "22000",
        stock: "10",
        image: "/img/esfera-maceta.png",
        category: "macetas"
    },
    {
        id: "maceta002",
        name: "Grani",
        description: "",
        price: "19000",
        stock: "10",
        image: "/img/grani-maceta.png",
        category: "macetas"
    },
    {
        id: "maceta003",
        name: "Natural",
        description: "",
        price: "9000",
        stock: "10",
        image: "/img/natural-maceta.png",
        category: "macetas"
    },
    {
        id: "maceta004",
        name: "Nube",
        description: "",
        price: "11000",
        stock: "10",
        image: "/img/nube-maceta.png",
        category: "macetas"
    },
    {
        id: "maceta005",
        name: "Romana",
        description: "",
        price: "65500",
        stock: "10",
        image: "/img/romana-maceta.png",
        category: "macetas"
    },
    {
        id: "servicio001",
        name: "Plantacion",
        description: "",
        price: "4500",
        stock: "10",
        image: "/img/plantacion.png",
        category: "servicio"
    },
    {
        id: "servicio002",
        name: "Decoracion Interior",
        description: "",
        price: "85500",
        stock: "10",
        image: "/img/decoracion-interior.jpg",
        category: "servicio"
    },
    {
        id: "servicio003",
        name: "Decoracion Exterior",
        description: "",
        price: "100000",
        stock: "10",
        image: "/img/decoracion-exterior.jpg",
        category: "servicio"
    },
]

const getProducts = () => {
    return new Promise( (resolve, reject)=> {
        setTimeout( ()=>{
            resolve(products)
        }, 500 )
    } )
}

export { getProducts }