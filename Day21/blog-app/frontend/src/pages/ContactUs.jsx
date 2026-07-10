import Navbar from "../components/Navbar";

function ContactUs() {
  const contactDetails = [
    {
      label: "Email",
      value: "support@blogpost.in",
      href: "mailto:support@blogpost.in",
    },
    {
      label: "Phone",
      value: "+91 98765 XXXXX",
      href: "tel:+919876543210",
    },
    {
      label: "Location",
      value: "Dehradun, Uttarakhand, India",
      href: null,
    },
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-container py-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Get in Touch
            </p>
            <h1 className="my-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Us
            </h1>
            <p className="text-base-content/60">
              Reach out to us directly using the details below.
            </p>
          </div>

          <div className="premium-card rounded-2xl p-6 sm:p-10">
            <div className="divide-y divide-base-300">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-medium text-base-content/60">
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-lg font-semibold">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;