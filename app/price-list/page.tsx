import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/constants";
import { formatPrice } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";

export default function PricelistPage() {
  return (
    <fieldset className="min-h-full w-full rounded lg:p-4">
      <h2 className="text-center font-display text-2xl font-black text-yellow-900">
        Pricelist Vanilla&apos;s Bean
      </h2>

      <hr className="mb-4 mt-8 border-stone-200" />

      <Button className="">
        <IconDownload /> Download Pricelist
      </Button>

      <ul className="mt-4 flex flex-col divide-y border">
        <li className="flex w-full divide-x bg-yellow-500 text-center font-bold">
          <h4 className="w-10 py-1">No.</h4>
          <h4 className="flex-grow py-1">Name</h4>
          <h4 className="w-24 py-1 sm:w-32">
            Price <span className="sm:hidden">(Rp)</span>
          </h4>
        </li>
        {PRODUCTS.map((productItem, productItemIndex) => (
          <li
            key={productItemIndex}
            className="flex w-full divide-x bg-stone-100"
          >
            <p className="min-w-10 py-1 text-center">{productItemIndex + 1}</p>
            <p className="flex-grow text-wrap py-1 pl-2">{productItem.name}</p>
            <p className="min-w-24 py-1 sm:w-32 pl-2">
              <span>
                {formatPrice(productItem.price)}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
