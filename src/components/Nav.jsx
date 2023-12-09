import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

function XIcon() {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export default function Nav() {
  return (
    <div className="sticky border-b border-slate-900/20 inset-x-0 top-0 z-30 backdrop-blur-xl bg-white/60">
      <Disclosure
        as="nav"
        className="main-container relative py-3 text-slate-800"
      >
        {({ open }) => (
          <>
            <div className="flex items-center justify-between">
              <a className="text-xl font-bold hover:text-slate-500" href="/">
                Ethan Ou
              </a>
              <Disclosure.Button
                className="w-5 h-5 xs:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {open ? <XIcon /> : <MenuIcon />}
              </Disclosure.Button>
              <div className="hidden xs:flex items-center space-x-6 text-l font-semibold">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-slate-500"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <Disclosure.Panel className="xs:hidden">
              <div className="pt-4 space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-slate-500 block font-semibold"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
