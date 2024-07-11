import { ALL_CATEGORY } from "@/constants";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function MenuPage() {
  return (
    <fieldset className="min-h-full w-full p-4 pt-16 text-center">
      <blockquote className="mx-auto max-w-2xl">
        <h2 className="font-display text-2xl font-black text-yellow-900 lg:text-4xl">
          Menu Vanilla Bean
        </h2>
        <p className="mt-4 text-yellow-900">
          Selalu ada waktu yang tepat untuk menikmati makanan manis! Dibuat
          dengan hati-hati dan disiapkan dengan cinta, permen kami adalah semua
          yang Anda butuhkan untuk membuat setiap hari menjadi istimewa. Temukan
          favorit Anda sekarang.
        </p>
      </blockquote>

      <ul className="mt-16 flex flex-wrap justify-center">
        {ALL_CATEGORY.map((productItem, productItemIndex) => (
          <Link
            key={productItemIndex}
            href={`/item/${slugify(productItem)}`}
            className="flex w-full flex-col items-center gap-y-2 py-8 xs:w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12"
          >
            <figure className="grid h-24 w-24 place-items-center overflow-hidden rounded-full border-8 border-amber-100 bg-white">
              <Image
                src={"/icon.jpg"}
                alt="category"
                width={927}
                height={927}
                className="max-h-20 w-20"
              />
            </figure>
            <h5 className="font-display text-xl font-black text-lime-500">
              {productItem}
            </h5>
          </Link>
        ))}
      </ul>
    </fieldset>
  );
}
