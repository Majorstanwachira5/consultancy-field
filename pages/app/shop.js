import { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default function Shop() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'GDPR Compliance Toolkit',
      category: 'Templates',
      price: 299,
      description: 'Complete set of GDPR compliance templates and checklists',
      features: ['Privacy Policy Template', 'Data Processing Records', 'Consent Forms', 'Breach Notification Templates'],
      image: '📋'
    },
    {
      id: 2,
      name: 'Data Protection Training Course',
      category: 'Training',
      price: 199,
      description: 'Comprehensive online training course for data protection',
      features: ['10 Hours of Content', 'Interactive Modules', 'Certificate of Completion', '1 Year Access'],
      image: '🎓'
    },
    {
      id: 3,
      name: 'Security Audit Checklist',
      category: 'Templates',
      price: 149,
      description: 'Professional security audit checklist and assessment tools',
      features: ['Technical Security Checklist', 'Risk Assessment Matrix', 'Remediation Guidelines', 'Compliance Mapping'],
      image: '🔍'
    },
    {
      id: 4,
      name: 'Privacy Impact Assessment Kit',
      category: 'Templates',
      price: 249,
      description: 'Complete DPIA toolkit with templates and guidance',
      features: ['DPIA Template', 'Risk Assessment Tools', 'Mitigation Strategies', 'Legal Guidance'],
      image: '⚖️'
    },
    {
      id: 5,
      name: 'DevOps Best Practices Guide',
      category: 'Guides',
      price: 99,
      description: 'Comprehensive guide to DevOps implementation',
      features: ['CI/CD Setup Guide', 'Infrastructure Templates', 'Monitoring Setup', 'Security Integration'],
      image: '⚙️'
    },
    {
      id: 6,
      name: '1-Hour Consultation Session',
      category: 'Services',
      price: 150,
      description: 'One-on-one consultation with our experts',
      features: ['Video Call Session', 'Expert Advice', 'Action Plan', 'Follow-up Email'],
      image: '💬'
    }
  ]

  const categories = ['all', 'Templates', 'Training', 'Guides', 'Services']

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <AuthLayout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Consultancy Shop</h1>
            <p className="text-gray-600 mt-2">Professional templates, training, and consultation services</p>
          </div>
          <div className="relative">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
              🛒 Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{product.image}</div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  </div>
                  
                  <ul className="text-sm text-gray-700 mb-4 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">${item.price * item.quantity}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-800 text-xs"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-bold text-lg">${getTotalPrice()}</span>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}