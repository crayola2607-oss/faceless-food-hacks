import React from 'react'

export default function App(){
  async function subscribe(e){
    e.preventDefault();
    const email = e.target.email.value;
    try{
      // Replace the endpoint with your Mailchimp/ConvertKit webhook
      await fetch('/api/subscribe', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email})});
      alert('Thanks — check your inbox (replace /api/subscribe with your service).');
    }catch(err){
      console.error(err);
      alert('Subscription failed — check console.');
    }
  }

  function buyKit(){
    // Replace with your Stripe/Gumroad link
    window.open('https://buy.stripe.com/test_123', '_blank');
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="text-xl font-extrabold">FoodHacks Pro</div>
        <nav className="space-x-6 hidden md:flex text-sm">
          <a href="#why">Why</a>
          <a href="#recipes">Recipes</a>
          <a href="#blog">Blog</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Simple food hacks that save time & taste amazing</h1>
            <p className="mt-4 text-lg text-neutral-600">Quick recipes, kitchen shortcuts, and gadget recommendations (affiliate-ready) — no face required.</p>

            <div className="mt-6 flex gap-4">
              <button onClick={buyKit} className="px-6 py-3 bg-black text-white rounded-lg shadow">Buy starter kit</button>
              <a href="#newsletter" className="px-6 py-3 border rounded-lg">Get the free recipe ebook</a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-neutral-600">
              <li>✔ 5-minute recipes</li>
              <li>✔ Meal prep shortcuts</li>
              <li>✔ Kitchen gadget reviews</li>
              <li>✔ Weekly email hacks</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold">Free checklist: 30-day Food Hacks Launch</h3>
            <ol className="mt-4 text-sm space-y-2 text-neutral-600">
              <li>1. Choose a sub-niche (e.g., 10-minute lunches)</li>
              <li>2. Publish 10 SEO posts + 5 product reviews</li>
              <li>3. Set up email + 3-email funnel</li>
              <li>4. Run small paid tests & optimize</li>
            </ol>

            <form id="newsletter" onSubmit={subscribe} className="mt-6 flex gap-2">
              <input name="email" required type="email" placeholder="you@example.com" className="flex-1 border px-4 py-2 rounded-lg" />
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg">Get it</button>
            </form>

            <p className="mt-3 text-xs text-neutral-400">We never sell emails. Affiliate disclosure applies.</p>
          </div>
        </section>

        <section id="why" className="py-8">
          <h2 className="text-2xl font-bold">Why Food Hacks</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">High commercial intent</h4>
              <p className="text-sm text-neutral-600 mt-2">People search for quick cooking solutions and often buy gadgets and pantry staples.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Shareable content</h4>
              <p className="text-sm text-neutral-600 mt-2">Short-form recipe hacks perform well on social platforms to drive traffic.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Easy to monetize</h4>
              <p className="text-sm text-neutral-600 mt-2">Affiliate links, ebooks, and subscriptions work well.</p>
            </div>
          </div>
        </section>

        <section id="recipes" className="py-8">
          <h2 className="text-2xl font-bold">Seed ideas</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {['5-Minute Lunches','One-Pan Dinners','Meal-Prep for 2'].map((t,i)=> (
              <article key={i} className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold">{t}</h4>
                <p className="text-sm text-neutral-600 mt-2">Quick excerpt — expand to full SEO post (1.5k+ words for commercial intent).</p>
                <a className="mt-3 inline-block text-sm underline" href="#">Read</a>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t pt-6 text-sm text-neutral-500">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div>© {new Date().getFullYear()} FoodHacks Pro</div>
            <div className="space-x-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
