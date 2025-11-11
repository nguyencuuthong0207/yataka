import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">YATAKA</h3>
            <p className="text-sm leading-relaxed mb-4">
              Ghế massage thông minh hàng đầu tại Việt Nam. Uy tín từ 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Khuyến Mãi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Tin Tức
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Kiểm Tra Bảo Hành
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition">
                  Chính Sách
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p>0829 161 616</p>
                  <p className="text-xs">Hỗ trợ 24/7</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <p>info@yataka.vn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-4">
            <div>
              <h5 className="font-semibold text-white mb-2">Chứng Chỉ</h5>
              <p>ISO 9001:2015 • FDA • RoHS • Bảo Hành 5 Năm</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Phương Thức Thanh Toán</h5>
              <p>Tiền Mặt • Chuyển Khoản • Trả Góp 0%</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">Giao Hàng</h5>
              <p>Miễn Phí Giao + Lắp Đặt Toàn Quốc</p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-700">
            <p>© 2025 YATAKA. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
