import Footer from "@/components/footer/Footer";
import AnnouncementBar from "@/components/navbar/AnnouncementBar";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">
            404
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            We can&apos;t find that page.
          </p>

          <Button href="/" className="mt-3">
            Go Back Home
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
