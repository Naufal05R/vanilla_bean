import { CONTACTS, OFFLINE_STORE } from "@/constants";
import Link from "next/link";

export default function OrderPage() {
  return (
    <fieldset className="min-h-full w-full p-4 pt-16 text-center">
      <blockquote className="mx-auto max-w-2xl">
        <h2 className="font-display text-2xl font-black text-yellow-900 lg:text-4xl">
          How to Order?
        </h2>
        <p className="mt-4 text-yellow-900">
          Pilih salah satu cara pemesanan yang paling baik menurut Anda. Vanilla
          Bean akan segera merespon pesanan Anda.
        </p>
      </blockquote>

      <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
        {[CONTACTS[1], CONTACTS[2], OFFLINE_STORE, CONTACTS[0]].map(
          (contactItem, contactItemIndex) => (
            <Link
              key={contactItemIndex}
              href={contactItem.href}
              className="flex flex-col items-center"
            >
              {contactItem.icon({ size: 48 })}
              <h5
                className="mt-2 font-display text-xl font-black"
                style={{ color: contactItem.color }}
              >
                Via {contactItem.title}
              </h5>
              <span
                style={{ backgroundColor: contactItem.color }}
                className="rounded-full inline-flex gap-x-1 items-center pl-3 pr-2.5 py-1 text-white"
              >
                {contactItem.value}
              </span>
            </Link>
          ),
        )}
      </ul>
    </fieldset>
  );
}
