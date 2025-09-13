'use client';

import React from 'react';

const categoryData = {
  'neb-categories': {
    title: 'NEB Courses',
    categories: ['Class 11', 'Class 12', 'Dropper'],
  },
  'see-categories': {
    title: 'SEE Courses',
    categories: ['Class 10', 'Class 9', 'Class 8'],
  },
  'entrance-categories': {
    title: 'Entrance Preparation',
    categories: ['BSc.CSIT', 'BCA', 'BIT'],
  },
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  if (!(category in categoryData)) {
    return (
      <div className="text-center py-20 text-red-600">
        <h1 className="text-3xl font-bold">404 - Category Not Found</h1>
      </div>
    );
  }

  const course = categoryData[category as keyof typeof categoryData];

  return (
    <div className="min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{course.title}</h1>

      <ul className="space-y-2">
        {course.categories.map((cat, index) => (
          <li
            key={index}
            className="border p-4 rounded-md shadow hover:shadow-lg transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
