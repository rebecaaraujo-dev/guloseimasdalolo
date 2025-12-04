import basket_icon from './basket_icon.png'
import logo from './logo.png'
import logo_circle from './logo-circle.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import instagram_icon from './instagram_icon.png'
import whatsapp_icon from './whatsapp_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    logo_circle,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    instagram_icon,
    whatsapp_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Bolos",
        menu_image: menu_1
    },
    {
        menu_name: "Docinhos",
        menu_image: menu_2
    },
    {
        menu_name: "Brownies",
        menu_image: menu_3
    },
    // {
    //     menu_name: "Donuts",
    //     menu_image: menu_4
    // },
    // {
    //     menu_name: "Ovos",
    //     menu_image: menu_5
    // },
    // {
    //     menu_name: "Panetones",
    //     menu_image: menu_6
    // },
    {
        menu_name: "Sobremesas",
        menu_image: menu_7
    },
    // {
    //     menu_name: "Assados",
    //     menu_image: menu_8
    // }
    ]

export const food_list = [
    {
        _id: "1",
        name: "Bolo Temático",
        image: food_1,
        price: 150,
        description: "Perfeito para qualquer ocasião, feito sob medida e decorado com todo carinho.",
        category: "Bolos"
    },
    {
        _id: "2",
        name: "Naked Cake",
        image: food_2,
        price: 110,
        description: "Visual rústico, massa fofinha e recheio generoso. Finalizado com frutas frescas.",
        category: "Bolos"
    }, {
        _id: "3",
        name: "Bento Cake",
        image: food_3,
        price: 25,
        description: "Pequeno, fofinho e personalizado. Ideal para presentear ou adoçar o dia.",
        category: "Bolos"
    }, {
        _id: "4",
        name: "Caseirinho",
        image: food_4,
        price: 28,
        description: "Sabor de casa! Bolo simples, macio e perfeito para qualquer momento.",
        category: "Bolos"
    }, {
        _id: "5",
        name: "Bolo Vulcão",
        image: food_5,
        price: 32,
        description: "Clássico irresistível com muito recheio escorrendo. Serve de 6 a 8 fatias.",
        category: "Bolos"
    }, {
        _id: "6",
        name: "Cupcake",
        image: food_6,
        price: 8,
        description: "Fofo, delicado e cheio de sabor. Perfeito para festas ou para matar a vontade de doce.",
        category: "Bolos"
    }, {
        _id: "7",
        name: "Brownie Doce de Leite",
        image: food_7,
        price: 12,
        description: "Chocolate intenso com recheio cremoso de doce de leite. Pura indulgência.",
        category: "Brownies"
    }, {
        _id: "8",
        name: "Brownie Brigadeiro",
        image: food_8,
        price: 12,
        description: "Brownie macio com brigadeiro cremoso. Feito para os amantes de chocolate.",
        category: "Brownies"
    }, {
        _id: "9",
        name: "Mini Brownie",
        image: food_9,
        price: 75,
        description: "Pequenos no tamanho, enormes no sabor. Uma opção prática e deliciosa.",
        category: "Brownies"
     }, {
        _id: "10",
        name: "Pavê",
        image: food_10,
        price: 50,
        description: "Camadas cremosas com biscoito e recheio nos sabores tradicional, pêssego ou morango.",
        category: "Sobremesas"
    }, {
        _id: "11",
        name: "Banoffee",
        image: food_11,
        price: 90,
        description: "Base crocante, banana fresquinha e doce de leite cremoso. Um clássico que não tem erro.",
        category: "Sobremesas"
    }, {
        _id: "12",
        name: "Torta (Fatia)",
        image: food_12,
        price: 18,
        description: "Massa leve com recheio cremoso. Uma sobremesa prática e sempre deliciosa.",
        category: "Sobremesas"
     }, {
        _id: "13",
        name: "Brigadeiro",
        image: food_13,
        price: 15,
        description: "Tradicional, cremoso e feito com chocolate de verdade. Impossível comer um só.",
        category: "Docinhos"
    },
    {
        _id: "14",
        name: "Beijinho",
        image: food_14,
        price: 15,
        description: "Docinho macio com sabor marcante de coco. Um clássico das festinhas.",
        category: "Docinhos"
    }
]
