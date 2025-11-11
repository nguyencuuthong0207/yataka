export default function CustomerImages() {
  const images = [
    {
      id: 1,
      image: "/image/khach-hang/le-duong-bao-lam.jpg",
      location: "Hà Nội",
    },
    {
      id: 2,
      image: "/image/khach-hang/oc-thanh-van.jpg",
      location: "TP.HCM",
    },
    {
      id: 3,
      image: "/image/khach-hang/Ngo-Kien-Huy-su-dung-ghe-massage-osanno-Os-2000.jpg",
      location: "Đà Nẵng",
    },
    {
      id: 4,
      image: "/image/khach-hang/chup-voi-nhan-vien.jpg",
      location: "Cần Thơ",
    },
    {
      id: 5,
      image:
        "/image/khach-hang/z6973655306375_1842fc82e6ce8eae2ec6e525e34d6ae4-600x600.jpg",
      location: "Bình Dương",
    },
    {
      id: 6,
      image: "/image/chi-nhanh/store-dak-lak.jpg",
      location: "Vũng Tàu",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Hình Ảnh Khách Hàng Đã Mua</h2>
          <p className="text-gray-600">Khách hàng từ khắp nơi hài lòng với sản phẩm YATAKA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Customer from ${item.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-semibold">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
