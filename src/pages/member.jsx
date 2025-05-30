import React, { useState } from 'react';
import { 
  ChevronLeft, Star, Shield, Gift, Zap, Users, Clock, CheckCircle, Crown, 
  Diamond, Trophy, TrendingUp, Percent, MapPin, Phone, User, Menu, Bell,
  Heart, Share, Settings, ArrowRight, Sparkles
} from 'lucide-react';

const JelajahinMembership = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [activeTab, setActiveTab] = useState('benefits');

  const membershipPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '29K',
      fullPrice: 'Rp 29.000',
      period: '/bulan',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      icon: <Shield className="w-5 h-5" />,
      features: [
        'Diskon hingga 10%',
        'Poin reward',
        'Support prioritas',
        'Newsletter eksklusif'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '59K',
      fullPrice: 'Rp 59.000',
      period: '/bulan',
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-blue-50',
      icon: <Crown className="w-5 h-5" />,
      popular: true,
      features: [
        'Diskon hingga 25%',
        'Bonus 500 koin/bulan',
        'Early bird access',
        'Free upgrade kamar',
        'Cashback 5%',
        'Support 24/7'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '99K',
      fullPrice: 'Rp 99.000',
      period: '/bulan',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      icon: <Diamond className="w-5 h-5" />,
      features: [
        'Diskon hingga 40%',
        'Bonus 1000 koin/bulan',
        'Promo eksklusif',
        'Free breakfast',
        'Late check-out',
        'Cashback 10%',
        'Travel consultant',
        'Airport lounge'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Gift className="w-6 h-6 text-blue-500" />,
      title: 'Bonus Koin',
      subtitle: 'Setiap bulan',
      description: 'Dapatkan koin gratis bulanan'
    },
    {
      icon: <Percent className="w-6 h-6 text-red-500" />,
      title: 'Diskon Besar',
      subtitle: 'Hingga 40%',
      description: 'Hemat lebih banyak'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: 'Early Access',
      subtitle: 'Promo duluan',
      description: 'Akses pertama ke penawaran'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Support 24/7',
      subtitle: 'Prioritas tinggi',
      description: 'Bantuan kapan saja'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: 'Hemat jutaan rupiah dalam 6 bulan!',
      avatar: <User className="w-5 h-5 text-blue-500" />,
      plan: 'Premium'
    },
    {
      name: 'Budi S.',
      rating: 5,
      comment: 'Selalu dapat upgrade kamar gratis!',
      avatar: <User className="w-5 h-5 text-blue-500" />,
      plan: 'Platinum'
    },
    {
      name: 'Lisa K.',
      rating: 5,
      comment: 'Koin bonus sangat membantu liburan.',
      avatar: <User className="w-5 h-5 text-pink-500" />,
      plan: 'Premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 lg:max-w-none lg:mx-0 max-w-md mx-auto relative overflow-hidden">
      {/* Status Bar Simulator - Hidden on desktop */}
   
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3 p-2 -ml-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mr-2 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-white" />
              </div>
              <span className="font-semibold text-lg">Jadi Member</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Card */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-20">
           
          </div>
          <div className="relative">
            <h1 className="text-xl font-bold mb-2">Jadilah Member Premium!</h1>
            <p className="text-blue-100 text-sm mb-4">
              Hemat lebih banyak dan nikmati benefit eksklusif
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>Diskon 40%</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>Bonus Koin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="px-4 mb-4">
        <div className="flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'benefits'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Keuntungan
          </button>
          <button
            onClick={() => setActiveTab('plans')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'plans'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Paket Member
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'testimonials'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Review
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                      <span className="text-xs text-blue-600 font-medium">{benefit.subtitle}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{benefit.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Plans Tab */}
        {activeTab === 'plans' && (
          <div className="space-y-4">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl border-2 transition-all ${
                  selectedPlan === plan.id 
                    ? 'border-blue-400 shadow-lg' 
                    : 'border-gray-100 shadow-sm'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-center py-2 rounded-t-lg">
                    <div className="flex items-center justify-center text-xs font-semibold">
                      <Trophy className="w-3 h-3 mr-1" />
                      TERPOPULER
                    </div>
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${plan.bgColor} rounded-xl flex items-center justify-center mr-3`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{plan.name}</h3>
                        <p className="text-xs text-gray-500">{plan.period}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{plan.price}</div>
                      <div className="text-xs text-gray-500">{plan.fullPrice}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                      selectedPlan === plan.id
                        ? `bg-gradient-to-r ${plan.color} text-white`
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Terpilih' : 'Pilih Paket'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="space-y-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                      <span className="text-xs bg-gradient-to-r from-pink-500 to-red-500 px-2 py-1 rounded-full">
                        {testimonial.plan}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">"{testimonial.comment}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA - Fixed */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500">Paket terpilih:</p>
            <p className="font-semibold text-gray-800">
              {membershipPlans.find(p => p.id === selectedPlan)?.name} - {membershipPlans.find(p => p.id === selectedPlan)?.fullPrice}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-xs text-red-500">
              <Clock className="w-3 h-3 mr-1" />
              <span>Hemat 50%</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-bold shadow-lg">
          Daftar Sekarang
        </button>
      </div>

      {/* Home Indicator */}
      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-30"></div>
    </div>
  );
};

export default JelajahinMembership;