import { CONTACTS } from "@/constants";
import Link from "next/link";

export default function ContactPage() {
  return (
    <fieldset className="min-h-full w-full p-4 pt-16 text-center">
      <h2 className="font-display text-2xl font-black text-yellow-900 lg:text-4xl">
        Get in touch with Vanilla Bean
      </h2>
      <blockquote className="mx-auto mb-6 max-w-2xl text-yellow-900 lg:text-lg">
        <p className="my-4 tracking-widest">------</p>
        <p>Vanilla Bean Gourmet & Patisserie (Bekasi)</p>
        <p>ceritanya alamat kantor cabang utama di kota Bekasi</p>
        <p className="my-4 tracking-widest">------</p>
        <p>Vanilla Bean Gourmet & Patisserie (Jakarta)</p>
        <p>ceritanya alamat kantor cabang kedua di kota Jakarta</p>
      </blockquote>

      <Link href={"/"} className="inline-flex p-4 text-yellow-900">
        www.vanilla-bean.com
      </Link>

      <ul className="mt-8 flex flex-wrap justify-center gap-y-8">
        {CONTACTS.map((contactItem, contactItemIndex) => (
          <Link
            href={contactItem.href}
            key={contactItemIndex}
            className="flex w-full flex-col items-center sm:w-6/12 lg:w-4/12"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-amber-100">
              {contactItem.icon({
                size: 24,
                color: "rgb(245,158,11)",
              })}
            </div>
			<p className="mt-2 text-amber-500 font-semibold">{contactItem.display}</p>
          </Link>
        ))}
      </ul>
    </fieldset>
  );
}
