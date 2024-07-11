import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconHome,
  IconMail,
  IconPhone,
  IconPhoneFilled,
} from "@tabler/icons-react";

export const NAVIGATIONS: { name: string; href: string }[] = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Menu",
    href: "/item/menu",
  },
  {
    name: "Our Client",
    href: "/our-client",
  },
  {
    name: "Pricelist",
    href: "/price-list",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

export const FOOTERS: {
  name: string;
  href: string;
  icon?: () => JSX.Element;
}[] = [
  ...NAVIGATIONS,
  {
    name: "How to order",
    href: "/take-order",
  },
  {
    name: "Instagram",
    href: "/",
    icon: () => <IconBrandInstagram size={20} />,
  },
  {
    name: "Facebook",
    href: "/",
    icon: () => <IconBrandFacebook size={20} />,
  },
];

export const OFFLINE_STORE = {
  color: "#f59e0b",
  title: "Offline Store",
  display: "Our Address",
  value: "Our Address",
  href: "https://maps.app.goo.gl/Sbu9arwVf2XC7xma6",
  icon: ({ ...props }) => <IconHome {...props} />,
};

export const CONTACTS: {
  color?: string;
  title: string;
  display: string;
  value: string;
  href: string;
  icon: ({
    ...props
  }: {
    size?: string | number;
    color?: string;
  }) => JSX.Element;
}[] = [
  {
    color: "#eab308",
    title: "Email",
    display: "unknown@example.com",
    value: "vanilla@bean.com",
    href: "mailto:unknown@example.com",
    icon: ({ ...props }) => <IconMail {...props} />,
  },
  {
    color: "#84cc16",
    title: "Phone",
    display: "+62 812-1207-8708",
    value: "+6281212078708",
    href: "tel:+6281212078708",
    icon: ({ ...props }) => <IconPhone {...props} />,
  },
  {
    color: "#78716c",
    title: "Whatsapp",
    display: "+62 812-1207-8708",
    value: "+6281212078708",
    href: "https://wa.me/6281212078708",
    icon: ({ ...props }) => <IconBrandWhatsapp {...props} />,
  },
];

export const PRODUCTS: {
  category: string;
  name: string;
  price: number;
  image?: {
    src: string;
    alt: string;
  };
}[] = [
  { category: "Pastry", name: "Apple Pastry", price: 5000 },
  { category: "Pastry", name: "Chicken Curry Puff", price: 5000 },
  { category: "Pastry", name: "Chicken Mushroom Puff", price: 5000 },
  { category: "Pastry", name: "Zuppa Soup Cheese and Ham", price: 18000 },
  { category: "Pastry", name: "Zuppa Soup Chicken & Corn", price: 18000 },
  { category: "Savory", name: "Lasagna Individual", price: 12000 },
  { category: "Savory", name: "Macaroni Schotel", price: 12000 },
  { category: "Savory", name: "Pastel", price: 4500 },
  { category: "Savory", name: "Risoles Beef Bolognese & Cheese", price: 6000 },
  { category: "Savory", name: "Risoles Rogut ayam", price: 5000 },
  { category: "Savory", name: "Risoles Smoked Beef", price: 5000 },
  { category: "Savory", name: "Smoked Beef Cheese Quiche", price: 5000 },
  { category: "Sweet", name: "Apple Pie", price: 6000 },
  { category: "Sweet", name: "Choco Crepes", price: 4500 },
  { category: "Sweet", name: "Eclair", price: 5000 },
  { category: "Sweet", name: "Klappertart", price: 7000 },
  { category: "Sweet", name: "Lumpur Syurga", price: 5000 },
  { category: "Sweet", name: "Pie Buah", price: 5000 },
  { category: "Sweet", name: "Soes Buah", price: 5000 },
  { category: "Sweet", name: "Soes Coklat", price: 5000 },
  { category: "Sweet", name: "Soes Original", price: 4500 },
  { category: "Traditional", name: "Arem-Arem", price: 4500 },
  { category: "Traditional", name: "Lemper", price: 4500 },
  { category: "Traditional", name: "Sosis Solo Ayam", price: 5000 },
  { category: "Traditional", name: "Sosis Solo Daging", price: 6000 },
  { category: "Cake", name: "Banana Cake Cheese (diameter 22)", price: 160000 },
  {
    category: "Cake",
    name: "Banana Cake Chocolate (diameter 22)",
    price: 155000,
  },
  {
    category: "Cake",
    name: "Banana Cake Original (diamater 22)",
    price: 165000,
  },
  { category: "Cake", name: "Brownies Bakar 20x10", price: 70000 },
  { category: "Cake", name: "Brownies Kukus 20x10", price: 65000 },
  { category: "Puding", name: "Bread Butter Pudding", price: 7000 },
  { category: "Puding", name: "Caramel Puding", price: 7000 },
  { category: "Puding", name: "Pudding Buah", price: 5000 },
  { category: "Puding", name: "Pudding Cokelat", price: 5000 },
  { category: "Puding", name: "Pudding Vanilla", price: 5000 },
];

export const ALL_CATEGORY = Array.from(
  new Set(PRODUCTS.map((product) => product.category)),
);
