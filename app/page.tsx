import Figure from "@/components/Figure";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Figure
        src={"/icon.jpg"}
        alt="logo"
        width={927}
        height={927}
        classNames={{
          figure:
            "xs:aspect-[4/3] aspect-square w-full bg-stone-500 sm:aspect-video lg:aspect-square lg:w-7/12",
        }}
      />
      <fieldset className="min-h-full w-full rounded border border-stone-200 p-4 text-center lg:w-5/12">
        <h2 className="font-display text-2xl font-black text-yellow-900">
          Vanilla&apos;s Bean Today
        </h2>
        <h3 className="mt-2 font-body font-medium uppercase text-green-600">
          lovely
        </h3>
        <hr className="my-4 border-amber-200" />
        <blockquote className="space-y-4 font-display text-lg font-bold">
          <p>
            Explore our various menus from modern to traditional with halal and
            premium ingredients.
          </p>
          <p>
            Experience for a dozen years in providing snack box services by
            prioritizing quality and satisfaction of our thousand customers.
          </p>
        </blockquote>
      </fieldset>
    </div>
  );
}
