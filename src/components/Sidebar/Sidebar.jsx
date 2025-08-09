import React, { useState } from 'react';
import items from './sidebarData';
import './Sidebar.css';

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null);
  };

  const toggleSub = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Session Explorer - Estimate</div>

      {items.map((item, index) => (
        <div key={index}>
          {/* Accordion Header */}
          <div
            onClick={() => toggle(index)}
            className="accordion-header"
          >
            {item.label}
            <span
              className="accordion-arrow"
              style={{
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              ▼
            </span>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="accordion-content">
              {item.children ? (
                item.children.map((sub, subIndex) => (
                  <div key={subIndex}>
                    {sub.children ? (
                      <>
                        {/* Sub-Accordion Header */}
                        <div
                          onClick={() => toggleSub(subIndex)}
                          className="sub-accordion-header"
                        >
                          {sub.label}
                          <span
                            className="sub-accordion-arrow"
                            style={{
                              transform: openSubIndex === subIndex ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}
                          >
                            ▼
                          </span>
                        </div>

                        {/* Nested Content */}
                        {openSubIndex === subIndex && (
                          <div className="nested-content">
                            {sub.children.map((nested, nestedIndex) => (
                              <div key={nestedIndex} className="nested-item">
                                {nested.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      // Simple sub-item without deeper children
                      <div className="simple-sub-item">{sub.label}</div>
                    )}
                  </div>
                ))
              ) : (
                <div className="simple-content">{item.content}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
