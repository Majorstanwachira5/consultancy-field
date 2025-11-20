import Layout from '../components/Layout';
import prisma from '../lib/prisma';

export async function getStaticProps() {
  const projects = await prisma.project.findMany({
    include: {
      media: {
        include: {
          media: true,
        },
      },
    },
  });
  return {
    props: { projects },
    revalidate: 60,
  };
}

export default function CaseStudies({ projects }) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white relative">
        <img src="/logo4.png" alt="DataProtect Co." className="absolute inset-0 w-full h-full object-contain opacity-3" />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Real results from real clients. See how we've helped organizations achieve compliance and build customer trust.</p>
        </div>
      </section>

      {projects.map((project, index) => (
        <section key={project.id} className={`section-padding ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="container">
            <div className="card mb-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📁</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                      <p className="text-gray-600">{project.client} • {project.service}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-gray-900">The Challenge</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {project.media.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Project Media</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {project.media.map(({ media }) => (
                          <img key={media.id} src={media.path} alt={media.name} className="w-full h-auto rounded-lg" />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">{project.progress}%</div>
                    <div className="text-sm text-gray-600">Progress</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">${project.budget.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Budget</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{new Date(project.dueDate).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-600">Due Date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Let us help you achieve compliance excellence and build customer trust.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Start Your Success Story</a>
            <a href="/resources" className="btn-secondary">Download Case Study Guide</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}