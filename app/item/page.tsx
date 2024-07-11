import { PRODUCTS } from "@/constants";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ItemPage() {
  return (
    <fieldset className="min-h-full w-full p-4 pt-16">
      <blockquote className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-2xl font-black text-yellow-900 lg:text-4xl">
          All Our Products
        </h2>
      </blockquote>

      <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((productItem, productItemIndex) => (
          <Link
            key={productItemIndex}
            href="/"
            className="flex w-full flex-col items-center gap-y-2 bg-lime-50 p-4"
          >
            <figure className="grid aspect-[3/4] w-full place-items-center overflow-hidden rounded border border-amber-100 border-slate-100 p-1">
              <Image
                src={"/caramel-puding.jpg"}
                alt="category"
                width={927}
                height={927}
                className="h-full w-full rounded-sm object-cover object-center"
              />
            </figure>
            <h5 className="font-display text-xl font-black text-lime-500">
              {productItem.name}
            </h5>
            <blockquote className="grid w-full grid-cols-2 gap-x-1">
              <div className="border-t-4 border-lime-600">
                <h6 className="font-semibold text-lime-600">Category</h6>
                <p className="text-lime-500">{productItem.category}</p>
              </div>
              <div className="border-t-4 border-amber-600">
                <h6 className="font-semibold text-amber-600">Price</h6>
                <p className="text-amber-500">{formatPrice(productItem.price)}</p>
              </div>
            </blockquote>
          </Link>
        ))}
      </ul>
    </fieldset>
  );
}
