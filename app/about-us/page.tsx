import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <fieldset className="min-h-full w-full rounded p-4 lg:w-6/12">
        <h2 className="font-display text-2xl font-black text-yellow-900">
          About Vanilla&apos;s Bean
        </h2>
        <blockquote className="mt-4 space-y-6 font-display text-lg font-bold xl:text-2xl">
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
      <figure className="aspect-square max-h-96 w-full lg:w-6/12 grid place-items-center">
        <Image
          src={"/icon.jpg"}
          width={927}
          height={927}
          alt="logo"
          className="h-full max-h-80 w-full max-w-80"
        />
      </figure>
    </div>
  );
}
