import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          مرحباً بك في Root N Rize
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          مجلتك اليومية الذكية لتتبع إنجازاتك وتحقيق أهدافك
        </p>
        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <Link href="/register" className="btn-primary text-lg">
            ابدأ الآن مجاناً
          </Link>
          <Link href="/about" className="btn-secondary text-lg">
            تعرف علينا
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">تتبع يومياتك</h3>
          <p className="text-gray-600">
            سجل أفكارك وإنجازاتك اليومية بسهولة وبساطة
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-2">نظم مهامك</h3>
          <p className="text-gray-600">
            أنشئ وتتبع مهامك اليومية وحقق أهدافك خطوة بخطوة
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">تابع تقدمك</h3>
          <p className="text-gray-600">
            راقب تقدمك وإنجازاتك من خلال إحصائيات ورسوم بيانية تفاعلية
          </p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 my-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك اليوم</h2>
          <p className="text-xl text-gray-600 mb-8">
            انضم إلى الآلاف من المستخدمين الذين يحققون أهدافهم مع Root N Rize
          </p>
          <Link href="/register" className="btn-primary text-lg">
            سجل الآن
          </Link>
        </div>
      </div>
    </Layout>
  );
} 