<script>
export default {
  data() {
    return {
      faqs: [
        { title: 'What is Residency and Internship?', answer: 'Answer about Residency and Internship.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'What are the requirements?', answer: 'Answer about the requirements.', isVisible: false },
        { title: 'Where can I find resources?', answer: 'Answer about resources.', isVisible: false },
        { title: 'Where can I find resources?', answer: 'Answer about resources.', isVisible: false },
        ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isVisible = !this.faqs[index].isVisible;
    },
  },
};
</script>

<template>
  <div
    v-for="(faq, index) in faqs"
    :key="index"
    class="Question"
    :style="{ height: faq.isVisible ? 'auto' : '54px' }"
  >
    <div class="title" @click="toggleAnswer(index)">
      <span
        class="questiontitle"
        :style="{ fontSize: faq.isVisible ? '1.5rem' : '1.125rem' }"
      >
        {{ faq.title }}
      </span>
      <img
        class="arrow"
        src="../assets/arrow.svg"
        :style="{ transform: faq.isVisible ? 'rotate(180deg)' : 'rotate(0deg)' }"
        alt="Toggle"
      />
    </div>
    <span
      class="answer"
      :style="{ display: faq.isVisible ? 'block' : 'none', fontSize: faq.isVisible ? '1.25rem' : '1rem' }"
    >
      {{ faq.answer }}
    </span>
  </div>
</template>

<style scoped>
.arrow {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.answer {
  color: black;
  transition: font-size 0.3s ease, display 0.3s ease;
  min-height: 2.375rem;
}

.Question {
  background-color: rgba(230, 241, 253, 0.6);
  width: 112.25rem;
  border-radius: 0.625rem;
  border: 0.1875rem solid rgba(77, 153, 224, 1);
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: height 0.3s ease;
  gap: 0.5rem;
  min-height: 2.375rem;
}

.title {
  width: 110.94rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.625rem;
  min-height: 2.375rem;
}

.questiontitle {
  width: 108.75rem;
  min-height: 2.375rem;
  color: black;
  font-weight: 600;
  transition: font-size 0.3s ease;
}
</style>
