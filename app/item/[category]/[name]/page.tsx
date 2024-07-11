import { PRODUCTS } from "@/constants";
import { formatPrice, slugify, unslugify } from "@/lib/utils";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Cake, Search, Waypoints } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage({ params }: { params: { name: string } }) {
  const product = PRODUCTS.find(
    (product) => slugify(product.name) === params.name,
  );

  return product && (
    <fieldset className="grid w-full grid-cols-1 place-content-start place-items-center gap-y-16 p-4 lg:grid-cols-2">
      <figure className="lg:aspect-square w-full lg:w-8/12 bg-stone-200 p-4 transition duration-300 hover:bg-amber-500">
        <Image
          src={"/caramel-puding.jpg"}
          alt={"category"}
          width={927}
          height={927}
          className={
            "aspect-square w-full h-full rounded-sm object-cover object-center"
          }
        />
      </figure>

      <article className="w-full rounded border p-4">
        <h4 className="text-center font-display text-2xl font-black capitalize text-yellow-900 lg:text-4xl">
          {unslugify(params.name)}
        </h4>

        <h5 className="mt-8 font-display text-xl font-black text-amber-600 lg:text-3xl">
          {formatPrice(product.price)}
        </h5>

        <p className="mt-4 text-lg text-amber-600 lg:text-2xl">
          Deskripsi sementara
        </p>

        <hr className="mt-16" />

        <Link
          href={"/"}
          className="mt-4 inline-flex rounded-full bg-amber-600 px-4 py-2 text-xl text-white"
        >
          Order Via Whatsapp
          <IconBrandWhatsapp className="ml-2 h-6 w-6" />
        </Link>
      </article>

      <article className="flex w-full flex-wrap justify-center gap-2 border-t p-4 lg:col-span-2">
        <Link
          href={"/item/menu"}
          className="inline-flex rounded bg-amber-600 px-4 py-2 text-xl text-white"
        >
          Back to Menu
          <Cake className="ml-1.5" />
        </Link>
        <Link
          href={"/item"}
          className="inline-flex rounded bg-amber-600 px-4 py-2 text-xl text-white"
        >
          See All Products
          <Search className="ml-1.5" />
        </Link>
        <Link
          href={`/item/${slugify(product.category)}`}
          className="inline-flex items-center rounded bg-amber-600 px-4 py-2 text-xl text-white"
        >
          {product.category}
          <Waypoints className="ml-1.5" />
        </Link>
      </article>
    </fieldset>
  );
}
