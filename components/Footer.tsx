import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Root N Rize</h3>
            <p className="text-gray-400">
              مجلتك اليومية الذكية لتتبع إنجازاتك وتحقيق أهدافك
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  عن التطبيق
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@rootnrize.com" className="text-gray-400 hover:text-white transition-colors">
                  البريد الإلكتروني
                </a>
              </li>
              <li>
                <a href="https://twitter.com/rootnrize" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  تويتر
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Root N Rize. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
} 