import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const i18nResource = {
    en: {
        translation: {
            iAppTitle: "ReactMart",
            iAppSubtitle: "Shop Smarter with ReactMart",
            iDescription: "Description",
            iProductDetails: "Product Details",
            iProducts: "Products",
            iProduct: "Product",
            iBack: "Back",
            iCart: "Cart",
            iAddToCart: "Add to Cart",
            iRemove: "Remove",
            iSubmit: "Save",
            iPurchase: "Purchase",
            iPrice: "Price",
            iAuthor: '@Developed by dileep.p.t',
            iOrders: 'My Orders',
            iCount:'Count',
            iTotal:'Total'
        },
    },
    ar: {
        translation: {
            iAppTitle: "ReactMart",
            iAppSubtitle: "تسوق بطريقة أكثر ذكاءً مع ReactMart",
            iDescription: "وصف",
            iProductDetails: "تفاصيل المنتج",
            iProducts: "منتجات",
            iProduct: "منتج",
            iBack: "خلف",
            iCart: "عربة",
            iAddToCart: "أضف إلى السلة",
            iRemove: "يزيل",
            iSubmit: "يحفظ",
            iPurchase: "شراء",
            iPrice: "سعر",
            iAuthor: '@ تم التطوير بواسطة dileep.p.t',
            iOrders: 'طلباتي',
            iCount:'عدد',
            iTotal:'المجموع'
        },
    }
};

i18next.use(initReactI18next)
    .init({
        resources: i18nResource,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;