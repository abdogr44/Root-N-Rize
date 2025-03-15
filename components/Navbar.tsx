import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-bold text-blue-600">Root N Rize</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/" className={`nav-link ${router.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}>
              الرئيسية
            </Link>
            <Link href="/tasks" className={`nav-link ${router.pathname === '/tasks' ? 'text-blue-600' : 'text-gray-600'}`}>
              المهام
            </Link>
            <Link href="/journal" className={`nav-link ${router.pathname === '/journal' ? 'text-blue-600' : 'text-gray-600'}`}>
              المجلة
            </Link>
            <Link href="/stats" className={`nav-link ${router.pathname === '/stats' ? 'text-blue-600' : 'text-gray-600'}`}>
              الإحصائيات
            </Link>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/login" className="btn-secondary">
              تسجيل الدخول
            </Link>
            <Link href="/register" className="btn-primary">
              إنشاء حساب
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 