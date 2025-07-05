import React, { useEffect } from 'react';

const ProjectsSection: React.FC = () => {

  useEffect(() => {
    // Simply configure lightbox options when component mounts
    const configureLightbox = () => {
      if ((window as any).lightbox) {
        (window as any).lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'showImageNumberLabel': true,
          'alwaysShowNavOnTouchDevices': false,
          'fadeDuration': 600,
          'imageFadeDuration': 600,
          'fitImagesInViewport': true
        });
        console.log('Lightbox2 configured for React component');
      }
    };

    // Wait a bit for lightbox to load, then configure it
    const timer = setTimeout(configureLightbox, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'SIS! Student Information System',
      subtitle: 'Lead: Web architect & Full Stack developer',
      image: 'images/work-3.jpg',
      galleryKey: 'lb-sis-set',
      mainImage: 'images/portfolio/sis/1-CourseList.png',
      description: 'Student Information System',
      galleryImages: [
        'images/portfolio/sis/4-CartButton.png',
        'images/portfolio/sis/5-CartDropDown.png',
        'images/portfolio/sis/2-SearchCourses.png',
        'images/portfolio/sis/3-CourseDetails.png',
        'images/portfolio/sis/3.1-Course-About.png',
        'images/portfolio/sis/3.2-CourseInstructors.png',
        'images/portfolio/sis/3.3-CourseOutline.png',
        'images/portfolio/sis/3.4-CourseReviews.png',
        'images/portfolio/sis/3.5-CourseFAQ.png',
        'images/portfolio/sis/6-CartItems.png',
        'images/portfolio/sis/7-CartPayment.png',
        'images/portfolio/sis/8-CartCheckout.png',
        'images/portfolio/sis/9-CartCheckoutValidation.png',
        'images/portfolio/sis/10-CartPaymentProcessing.png',
        'images/portfolio/sis/11-CartEnrollPage.png',
        'images/portfolio/sis/12-SelfServiceEnrolledSection.png',
        'images/portfolio/sis/13-SelfServiceCalendar.png',
        'images/portfolio/sis/14-ExternalSites.png',
        'images/portfolio/sis/15-Organizations.png',
        'images/portfolio/sis/16-Self-Service.png'
      ]
    },
    {
      id: 2,
      title: 'Fly! Travel Make it Easy',
      subtitle: 'Created: Front End',
      image: 'images/work-1.jpg',
      galleryKey: 'lb-fly-set',
      mainImage: 'images/portfolio/fly/1-SignInAndRegister.png',
      description: 'Flight booking system',
      galleryImages: [
        'images/portfolio/fly/2-Filters.png',
        'images/portfolio/fly/3-Details.png',
        'images/portfolio/fly/4-FlightCardf.png',
        'images/portfolio/fly/5-FlightCardWithWarning.png',
        'images/portfolio/fly/6-Map.png',
        'images/portfolio/fly/7-Seat-Selection.png',
        'images/portfolio/fly/8-BookModal.png',
        'images/portfolio/fly/9-CheckoutModal.png',
        'images/portfolio/fly/10-Purchasepage.png',
        'images/portfolio/fly/Placeholder-List.png',
        'images/portfolio/fly/FlightBooking.png',
        'images/portfolio/fly/FlightList.png',
        'images/portfolio/fly/FlightPayment.png',
        'images/portfolio/fly/FlightPreferences.png',
        'images/portfolio/fly/Fly-Profile.png',
        'images/portfolio/fly/Fly-Reward-Details-page.png',
        'images/portfolio/fly/Fly-Reward.png',
        'images/portfolio/fly/Fly-Users.png'
      ]
    },
    {
      id: 3,
      title: 'Humanly! Educational Portal',
      subtitle: 'Consulted: Front End Component',
      image: 'images/work-2.jpg',
      galleryKey: 'lb-humanly-set',
      mainImage: 'images/portfolio/humanly/1.png',
      description: 'Educational portal',
      galleryImages: [
        'images/portfolio/humanly/2.png',
        'images/portfolio/humanly/3.png',
        'images/portfolio/humanly/4.png',
        'images/portfolio/humanly/5.png',
        'images/portfolio/humanly/6.png',
        'images/portfolio/humanly/7.png',
        'images/portfolio/humanly/8.png',
        'images/portfolio/humanly/9.png',
        'images/portfolio/humanly/10.png',
        'images/portfolio/humanly/11.png',
        'images/portfolio/humanly/12.png',
        'images/portfolio/humanly/13.png',
        'images/portfolio/humanly/14.png',
        'images/portfolio/humanly/15.png'
      ]
    },
    {
      id: 4,
      title: 'Gradingly! Grade the Student Skills',
      subtitle: 'Worked: as Web architect & developer',
      image: 'images/work-7.jpg',
      galleryKey: 'lb-sg-set',
      mainImage: 'images/portfolio/gradingly_v2/1-Gradingly-Login.png',
      description: 'Student grading system',
      galleryImages: [
        'images/portfolio/gradingly_v2/24-Gradingly-Settings.png',
        'images/portfolio/gradingly_v2/1.1-Gradingly-Content-Home-Sign-In-Modal.png',
        'images/portfolio/gradingly_v2/2-Gradingly-Content-Home.png',
        'images/portfolio/gradingly_v2/3-Gradingly-Exercises-page_no-1.png',
        'images/portfolio/gradingly_v2/5-Gradingly-Manage-Students.png',
        'images/portfolio/gradingly_v2/6-Gradingly-Manage-Add-Students.png',
        'images/portfolio/gradingly_v2/7-Gradingly-Content-Home-Assign-Test.png',
        'images/portfolio/gradingly_v2/8-Gradingly-Assignments.png',
        'images/portfolio/gradingly_v2/9-Gradingly-student-performance-2237-.png',
        'images/portfolio/gradingly_v2/10-Gradingly-school-school-quiz-grading-154.png',
        'images/portfolio/gradingly_v2/11-Gradingly-school-test-performance-154-534.png',
        'images/portfolio/gradingly_v2/12-Gradingly-School-Teacher.png',
        'images/portfolio/gradingly_v2/13-Placement-test-pronunciation-10.png',
        'images/portfolio/gradingly_v2/13.1-Placement-test-pronunciation-10.png',
        'images/portfolio/gradingly_v2/13.2-Placement-test-pronunciation-10.png',
        'images/portfolio/gradingly_v2/14.1-QuizeEngineWritingTask.png',
        'images/portfolio/gradingly_v2/14.2-QuizeEngineWritingTaskSubmitting.png',
        'images/portfolio/gradingly_v2/14.3-QuizeEngineWritingTaskSubmittinValidation.png',
        'images/portfolio/gradingly_v2/15-Student-Gradingly-Student-Assignments.png',
        'images/portfolio/gradingly_v2/16-Gradingly-Manage-Students-Main.png',
        'images/portfolio/gradingly_v2/17-Gradingly-Getting-Started-with-B1.png',
        'images/portfolio/gradingly_v2/18-Gradingly-Saved-Content.png',
        'images/portfolio/gradingly_v2/20-Gradingly-Student-Test-Performance.png',
        'images/portfolio/gradingly_v2/22-Gradingly-Collections.png',
        'images/portfolio/gradingly_v2/23-Gradingly-School-Edit.png'
      ]
    },
    {
      id: 5,
      title: 'DigiArt! NFT Marketplace',
      subtitle: 'Worked: As NodeJs Developer',
      image: 'images/work-4.jpg',
      description: 'NFT marketplace'
    },
    {
      id: 6,
      title: 'Alprints! Ecommerce Store',
      subtitle: 'Manager: Co-Founder',
      image: 'images/work-5.jpg',
      description: 'Ecommerce store'
    },
    {
      id: 7,
      title: 'Chato.io! Social app plugins',
      subtitle: 'Created! Full App',
      image: 'images/work-6.jpg',
      description: 'Social app plugins'
    }
  ];

  return (
    <section id="projects-section">
      <span>Accomplishments</span>
      <h2>Our Projects</h2>
      <p>Dream. Develop. Deploy</p>
      <div>
      {projects.map((project) => (
        <div key={project.id}>
        <div 
          style={{ 
          backgroundImage: `url(${project.image})`,
          minHeight: '300px',
          borderRadius: '8px',
          overflow: 'hidden',
          margin: '10px',
          position: 'relative'
          }}
        >
          <div style={{ borderRadius: '8px' }}></div>
          <div>
          <h3>
            <button 
            type="button" 
            style={{
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              textDecoration: 'none', 
              cursor: 'pointer',
              fontSize: 'inherit',
              fontWeight: 'bold'
            }}
            >
            {project.title}
            </button>
          </h3>
          <span style={{ fontSize: '14px', opacity: '0.9' }}>
            {project.subtitle}
          </span>
          {project.mainImage && (
            <>
            <a 
              href={project.mainImage}
              data-lightbox={project.galleryKey}
              data-title={project.description}
              style={{ 
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
              }}
            >
              See Details
            </a>
            
            {/* Hidden lightbox gallery images */}
            {project.galleryImages && project.galleryImages.map((imageUrl, index) => (
              <a 
              key={index}
              href={imageUrl} 
              data-lightbox={project.galleryKey}
              data-title={`${project.description} - Image ${index + 2}`}
              style={{ display: 'none' }}
              >
              Gallery Image {index + 2}
              </a>
            ))}
            </>
          )}
          </div>
        </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
