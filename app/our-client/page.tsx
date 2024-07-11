import Image from "next/image";

export default function ClientPage() {
  return (
    <fieldset className="min-h-full w-full rounded p-4 text-center">
      <h2 className="font-display text-2xl font-black text-yellow-900">
        Our Happy Client
      </h2>
      <p className="mt-4 text-yellow-900">We make Halal and Delicious Cakes</p>

      <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <li key={index} className="aspect-[4/3] bg-amber-100 grid place-items-center">
            <figure className="aspect-square h-full bg-stone-500 rounded-full overflow-hidden">
              <Image src={"/icon.jpg"} alt="logo" width={927} height={927} className="w-full h-full" />
            </figure>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
