// import React, { useState } from "react";

// interface HorizontalTimelineProps {
//   totalItems?: number;
// }

// export default function HorizontalTimeline({ 
//   totalItems = 10
// }: HorizontalTimelineProps): React.ReactElement {
//   const items = Array.from({ length: totalItems }, (_, index) => index + 1);
//   const [clickedItems, setClickedItems] = useState<Set<number>>(new Set());
//   const [expandedSquare, setExpandedSquare] = useState<number | null>(null);

//   const timelineTexts = [
//     "Induction", "Workshop 1", "Workshop 2", "Workshop 3", "Workshop 4", 
//     "Workshop 5", "Workshop 6", "Workshop 7", "Portfolio", "Final Interview"
//   ];

//   const handleSquareClick = (item: number) => {
//     setExpandedSquare(expandedSquare === item ? null : item);
//   };

//   const handleMarkAsDone = (item: number) => {
//     setClickedItems(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(item)) {
//         newSet.delete(item);
//       } else {
//         newSet.add(item);
//       }
//       return newSet;
//     });
//     setExpandedSquare(null);
//   };


//   return (
//     <div className="w-full max-w-7xl mx-auto p-8">
//       <div className="flex flex-wrap items-start justify-between" style={{ paddingTop: '40px', paddingBottom: '120px' }}>
//         {items.map((item, index) => {
//           const isTopPosition = index % 2 === 0; // Alternate top/bottom
          
//           return (
//             <div key={item} className="relative flex-shrink-0 mb-8" style={{ width: '100px', height: '280px', minWidth: '80px' }}>
//               {/* Square on top (for even indices) */}
//               {isTopPosition && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '-10px' }}>
//                   <div 
//                     className={`bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer hover:scale-110 ${
//                       expandedSquare === item ? 'px-7 py-5 scale-110 z-20' : 'px-5 py-3'
//                     } min-w-max whitespace-nowrap`}
//                     onClick={() => handleSquareClick(item)}
//                   >
//                     <span className="text-gray-700 text-sm sm:text-base font-medium block">
//                       {timelineTexts[index] || `Step ${item}`}
//                     </span>
//                     {expandedSquare === item && (
//                       <button
//                         className="mt-2 px-3 py-1 text-white text-xs rounded transition-colors"
//                         style={{
//                           backgroundColor: clickedItems.has(item) ? '#c7b8e6' : '#a2e3cc'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = clickedItems.has(item) ? '#b8a6d9' : '#8dd4b8';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = clickedItems.has(item) ? '#c7b8e6' : '#a2e3cc';
//                         }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleMarkAsDone(item);
//                         }}
//                       >
//                         {clickedItems.has(item) ? 'Move back to in progress?' : 'Mark as done?'}
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}
              
//               {/* Timeline Circle - centered vertically and horizontally */}
//               <div 
//                 className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 z-10"
//                 style={{
//                   top: '50%',
//                   marginTop: '-28px', // Half of circle height to center it
//                   backgroundColor: clickedItems.has(item) ? '#a2e3cc' : '#fdfbf1'
//                 }}
//               >
//                 <span className="text-gray-800 font-semibold text-base">
//                   {item}
//                 </span>
//               </div>

//               {/* Small arrow pointing from circle to square */}
//               <div className="absolute left-1/2 transform -translate-x-1/2" style={{
//                 top: isTopPosition ? 'calc(50% - 50px)' : 'calc(50% + 50px)',
//                 opacity: 0.4
//               }}>
//                 <svg 
//                   className="w-3 h-3" 
//                   viewBox="0 0 12 12" 
//                   fill="none"
//                   style={{
//                     transform: isTopPosition ? 'rotate(180deg)' : 'rotate(0deg)'
//                   }}
//                 >
//                   <path 
//                     d="M6 2L6 10M6 10L3 7M6 10L9 7" 
//                     stroke="#6b7280" 
//                     strokeWidth="1.5" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>

//               {/* Square on bottom (for odd indices) */}
//               {!isTopPosition && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '-10px' }}>
//                   <div 
//                     className={`bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer hover:scale-110 ${
//                       expandedSquare === item ? 'px-7 py-5 scale-110 z-20' : 'px-5 py-3'
//                     } min-w-max whitespace-nowrap`}
//                     onClick={() => handleSquareClick(item)}
//                   >
//                     <span className="text-gray-700 text-sm sm:text-base font-medium block">
//                       {timelineTexts[index] || `Step ${item}`}
//                     </span>
//                     {expandedSquare === item && (
//                       <button
//                         className="mt-2 px-3 py-1 text-white text-xs rounded transition-colors"
//                         style={{
//                           backgroundColor: clickedItems.has(item) ? '#c7b8e6' : '#a2e3cc'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = clickedItems.has(item) ? '#b8a6d9' : '#8dd4b8';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = clickedItems.has(item) ? '#c7b8e6' : '#a2e3cc';
//                         }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleMarkAsDone(item);
//                         }}
//                       >
//                         {clickedItems.has(item) ? 'Move back to in progress?' : 'Mark as done?'}
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Arrow (except for last item) */}
//               {index < items.length - 1 && (
//                 <div className="absolute left-full top-1/2 transform -translate-y-1/2 flex items-center justify-center" style={{ width: '20px' }}>
//                   <svg 
//                     className="w-4 h-3 sm:w-6 sm:h-4" 
//                     viewBox="0 0 24 16" 
//                     fill="none"
//                   >
//                     <path 
//                       d="M2 8h16m0 0l-4-4m4 4l-4 4" 
//                       stroke="#6b7280" 
//                       strokeWidth="2" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
              
//               {/* Final Arrow (after last circle) */}
//               {index === items.length - 1 && (
//                 <div className="absolute left-full top-1/2 transform -translate-y-1/2 flex items-center justify-center ml-2">
//                   <svg 
//                     className="w-4 h-3 sm:w-6 sm:h-4" 
//                     viewBox="0 0 24 16" 
//                     fill="none"
//                   >
//                     <path 
//                       d="M2 8h16m0 0l-4-4m4 4l-4 4" 
//                       stroke="#c7b8e6" 
//                       strokeWidth="2" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
