export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-16">
          <img
  src="/profile.jpg"
  alt="Profile"
  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white"
/>

          <h1 className="text-5xl font-bold mb-4">
            Surachai Portfolio
          </h1>

          <p className="text-xl text-slate-300">
            ครูภาษาอังกฤษ | นักศึกษา | Portfolio Website
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              ประวัติส่วนตัว
            </h2>

            <p className="mb-2">
              ชื่อ : สุรชัย
            </p>

            <p className="mb-2">
              Email : mynamesis1478@gmail.com
            </p>

            <p>
              Phone : 0954407333
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              ประวัติการศึกษา
            </h2>

            <ul className="space-y-2">
  <li>ปริญญาตรี ครุศาสตรบัณฑิต</li>
  <li>สาขาวิชาภาษาอังกฤษ</li>
  <li>มหาวิทยาลัย ...</li>
</ul>
<ul className="space-y-3">
  <li>📚 งานวิจัยด้านการสอนภาษาอังกฤษ</li>
  <li>🏫 ฝึกประสบการณ์วิชาชีพครู</li>
  <li>🎓 โครงการพัฒนาทักษะการอ่านและการเขียน</li>
</ul>
          </div>

        </div>

        <div className="mt-10 bg-white/10 backdrop-blur rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            ผลงาน
          </h2>

          <p>
            เพิ่มผลงานภายหลัง
          </p>
        </div>

        <div className="mt-10 bg-white/10 backdrop-blur rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            ติดต่อ
          </h2>

          <p>Email : mynamesis1478@gmail.com</p>
          <p>Phone : 0954407333</p>
        </div>

      </section>
    </main>
  );
}