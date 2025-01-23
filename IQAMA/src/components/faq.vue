<script>

export default {
  data() {
    return {
      faqs: [
        { title: 'What is Residency and Internship?', answer: 'Answer about Residency and Internship.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },
        { title: 'How to prepare for exams?', answer: 'Answer about preparing for exams.', isVisible: false },

      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isVisible = !this.faqs[index].isVisible;
    }
  }
};
</script>

<template>
<div
      v-for="(faq, index) in faqs"
      :key="index"
      class="Question"
      :style="{ height: faq.isVisible ? '84px' : '54px' }"
    >
      <div class="title" @click="toggleAnswer(index)">
        <span class="questiontitle">{{ faq.title }}</span>
        <img
          class="arrow"
          src="../assets/arrow.svg"
          :style="{ transform: faq.isVisible ? 'rotate(180deg)' : 'rotate(0deg)' }"
          alt="Toggle"
        />
      </div>
      <span
        class="answer"
        :style="{ display: faq.isVisible ? 'block' : 'none' }"
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
  transition: display 0.3s ease;
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
}
.title {
  width: 110.94rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.625rem;
}
.questiontitle {
  width: 108.75rem;
  height: 1.375rem;
  color: black;
  font-size: 1.0625rem;
  font-weight: 600;
}
</style>
