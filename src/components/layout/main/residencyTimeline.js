import React, { useEffect, useRef, useState } from 'react';

const ResidencyTimeline = ({ProcessandTimeline}) => {
  const iconRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const icon = iconRef.current;
    const timeline = timelineRef.current;
    const sections = timeline.querySelectorAll('li');
    
    const updateTimelineState = () => {
      if (!icon || !timeline) return;

      const timelineRect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let maxVisibleSection = 0;
      let maxVisibleArea = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          maxVisibleSection = index;
        }
      });

      setActiveSection(maxVisibleSection);

      const activeSection = sections[maxVisibleSection];
      const monthIndicator = activeSection.querySelector('.month-indicator');
      const monthRect = monthIndicator.getBoundingClientRect();
      
      const relativeTop = monthRect.top - timelineRect.top;
      
      icon.style.top = `${relativeTop}px`;

      sections.forEach((section, index) => {
        section.classList.toggle('active', index === maxVisibleSection);
      });
    };

    window.addEventListener('scroll', updateTimelineState);
    setTimeout(updateTimelineState, 100);

    return () => window.removeEventListener('scroll', updateTimelineState);
  }, []);

  return (
    <div className="timeline-wrapper">
      <div className="title">
        <h4>PROCESS & TIMELINE</h4>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-path"></div>
        
        <div className="timeline-icon" ref={iconRef}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path d="M12 15c-2.761 0-5 1.79-5 4h10c0-2.21-2.239-4-5-4z" />
          </svg>
        </div>

        <ul className="vertical-scrollable-timeline" ref={timelineRef}>
          <li className={activeSection === 0 ? 'active' : ''}>
            <div className="timeline-content">
              <div className="month-indicator">
                <span>MONTH</span>
                <strong>{ProcessandTimeline?.[0]?.Months}</strong>
              </div>
              <div className="content-wrapper">
                <h2>{ProcessandTimeline?.[0]?.title}</h2>
                <p>{ProcessandTimeline?.[0]?.Description}</p>
              </div>
            </div>
          </li>

          <li className={activeSection === 1 ? 'active' : ''}>
            <div className="timeline-content">
              <div className="month-indicator">
                <span>MONTH</span>
                <strong>{ProcessandTimeline?.[1]?.Months}</strong>
              </div>
              <div className="content-wrapper">
                <h2>{ProcessandTimeline?.[1]?.title}</h2>
                <p>{ProcessandTimeline?.[1]?.Description}</p>
              </div>
            </div>
          </li>

          <li className={activeSection === 2 ? 'active' : ''}>
            <div className="timeline-content">
              <div className="month-indicator">
                <span>MONTH</span>
                <strong>{ProcessandTimeline?.[2]?.Months}</strong>
              </div>
              <div className="content-wrapper">
                <h2>{ProcessandTimeline?.[2]?.title}</h2>
                <p>{ProcessandTimeline?.[2]?.Description}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResidencyTimeline;