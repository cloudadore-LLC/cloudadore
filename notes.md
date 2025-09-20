first navlinks
<section className="flex justify-between p-4">
        <Image src="/brandlogo.png" width={120} height={40} alt="brand logo" />

        {/* navlinks are here */}
        <nav className="outline outline-lime-500">
          <ul
            className={cn(
              "font-sans flex gap-2  font-normal text-base leading-6 tracking-normal"
            )}
          >
            {MenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? "text-blue-700"
                    : " text-rideBlack hover:text-blue-700"
                } cn("font-sans font-normal text-base leading-6 tracking-normal")`}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <section className="hidden lg:flex gap-2">
          <Button variant="outline">Donate</Button>
          <Button className="bg-blue-700 text-white">Join Community</Button>
        </section>
      </section>