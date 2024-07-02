import React from 'react'
import Top from '../components/Top'
import Cards from './components/Cards'
const Pricing = () => {
  return (
    <div>
      <Top title="Pricing" note="Simple & Predictable pricing. No Surprises."></Top>

      <section class="flex flex-wrap  justify-center mx-10 mt-20 gap-12">
<Cards title="Personal" type="Free"
f1="Lifetime Free"
f2="Up to 3 users"
f3="Unlimited Pages"
f4="Astro Sub Domain"
f5="Basic Integrations"
f6="Community Support"
/>
<Cards title="Startup" type="$19"
f1="All free features"
f2="Up to 20 users"
f3="Up to 20 custom domains"
f4="Unlimited Collaboraions"
f5="Advanced Integrations"
f6="Priority Support"
/>
<Cards title="Enterprise" type="Custom"
f1="All pro features"
f2="Unlimited Custom domains"
f3="99.99% Uptime SLA"
f4="SAML & SSO Integration"
f5="Dedicated Account Manager"
f6="24/7 Phone Support"

/>
</section>

    </div>
  )
}

export default Pricing
