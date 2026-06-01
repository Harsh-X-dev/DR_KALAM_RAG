import KnowledgeBaseCard from "../component/KnowledgeBaseCard";

export const KnowledgeBase = () => {
  return (
    <div className=" px-10 py-10 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <KnowledgeBaseCard
        title="Wings of Fire (Autobiography)"
        type="Book"
        description="Dr. Kalam's iconic autobiography that takes you through his journey from Rameswaram to ISRO and beyond."
        year="1999"
        metaText="Published"
        metaIconType="document"
        theme="blue"
        mainIcon="book"
      />

      <KnowledgeBaseCard
        title="Dream, Dream, Dreams Transform"
        type="Speech"
        description="A powerful speech on dreams, youth and the vision for a developed India."
        year="2004"
        metaText="12 min"
        metaIconType="clock"
        theme="purple"
        mainIcon="mic"
      />

      <KnowledgeBaseCard
        title="India 2020: A Vision for the New Millennium"
        type="Article"
        description="Dr. Kalam's article outlining his vision for India's development by the year 2020."
        year="1998"
        metaText="8 pages"
        metaIconType="document"
        theme="green"
        mainIcon="file"
      />
    </div>
  );
};
