export default function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "Chứng Chỉ ISO 9001:2015",
      description: "Chứng chỉ quản lý chất lượng quốc tế",
      icon: "/image/chung-chi/chung-nhan-iso.jpg",
    },
    {
      id: 2,
      name: "Chứng Chỉ FDA",
      description: "Đạt tiêu chuẩn an toàn sức khỏe",
      icon: "/image/chung-chi/chung-nhan-iso.jpg",
    },
    {
      id: 3,
      name: "Chứng Chỉ RoHS",
      description: "Không chứa chất độc hại",
      icon: "/image/chung-chi/chung-nhan-iso.jpg",
    },
    {
      id: 4,
      name: "Bảo Hành 5 Năm",
      description: "Bảo hành toàn diện cho tất cả sản phẩm",
      icon: "/image/chung-chi/chung-nhan-iso.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Tiêu Chuẩn & Chứng Chỉ</h2>
          <p className="text-gray-600">Các chứng chỉ quốc tế đảm bảo chất lượng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">
                <img src={cert.icon || "/placeholder.svg"} alt={cert.name} className="w-24 h-24 object-cover rounded" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
