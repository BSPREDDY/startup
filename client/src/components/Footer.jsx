export default function Footer() {
    return (
        <footer
            className="
      border-t
      border-white/10
      py-20
      mt-20
      "
        >
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-4xl font-bold">
                    LET'S CONNECT!
                </h2>

                <p className="mt-5 text-xl">
                    WE BUILD IT.
                    WE TEST IT.
                    WE PERFECT IT.
                </p>

                <p className="mt-3 text-gray-400">
                    YOUR VISION.
                    OUR CODE.
                    PERFECT RESULTS.
                </p>

                <div className="mt-10">
                    <p>surya@bhavanatss.com</p>
                    <p>bhavanatss.com</p>
                    <p>Bengaluru, Karnataka, India</p>
                </div>

                <div className="mt-10 text-yellow-400">
                    Quality Assured
                </div>

                <div className="mt-8 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Bhavana Technology and Software Solutions. All rights reserved.
                </div>

            </div>
        </footer>
    );
}