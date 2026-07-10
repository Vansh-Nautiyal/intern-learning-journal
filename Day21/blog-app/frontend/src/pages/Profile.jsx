import Navbar from "../components/Navbar";
import { useAuth } from "../context/useAuth";

export default function Profile() {
  const { user } = useAuth();
  const profileUser = user || {};

  const initials = (name) =>
    name
      ? name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "?";

  const details = [
    { label: "Username", value: profileUser.username || "Unknown" },
    { label: "Email", value: profileUser.email || "Not provided" },
  ];

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-container py-10">
        <div className="mx-auto max-w-xl">
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <span className="text-3xl font-bold text-primary">
                {initials(profileUser.username)}
              </span>
            </div>
          </div>

          <h1 className="mt-5 text-center text-2xl font-bold tracking-tight">
            {profileUser.username || "Unknown user"}
          </h1>
          <p className="text-center text-sm text-base-content/60">
            {profileUser.email}
          </p>

          <div className="premium-card mt-8 rounded-2xl p-6 sm:p-8">
            <div className="divide-y divide-base-300">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {item.label}
                  </span>
                  <span className="text-lg font-medium text-base-content/90">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
