<script>
export default {
  data() {
    return {
      packages: [
        {
          name: "Service Bureau Package",
          exams: [
            { label: "Exam", value: "Medical Department" },
            { label: "Status", value: "Completed" },
            { label: "Questions answered", value: "120" },
            { label: "Link to the Exam", value: "Exam", isLink: true, link: "/"  },
          ],
        },
        {
          name: "Service Bureau Package",
          exams: [
            { label: "Exam", value: "Common Questions" },
            { label: "Status", value: "Suspended" },
            { label: "Questions answered", value: "75" },
            { label: "Link to the Exam", value: "Exam", isLink: true, link: "/"  },
          ],
        },
        {
          name: "Medical Services Package",
          exams: [
            { label: "Exam", value: "Clinical" },
            { label: "Status", value: "Ended" },
            { label: "Questions answered", value: "20" },
            { label: "Link to the Exam", value: "Exam", isLink: true, link: "/"  },
          ],
        },      
      ],
    };
  },
};
</script>
<template>
    <div class="mid">
      <div
        class="package"
        v-for="(packageItem, index) in packages"
        :key="index"
      >
        <span class="name">{{ packageItem.name }}</span>
        <div
          class="exam"
          v-for="(exam, examIndex) in packageItem.exams"
          :key="examIndex"
        >
          <span>{{ exam.label }}</span>
          <div
            class="medical"
            v-if="!exam.isLink"
          >
            <span>{{ exam.value }}</span>
          </div>
          <div
            class="medicals"
            v-else
          >
            <a :href="exam.link" target="_blank" rel="noopener noreferrer">{{ exam.value }}</a>
          </div>
        </div>
      </div>
      <button class="exit">Exit</button>
    </div>
  </template>
  

  <style scoped>
  .exit {
    width: 3.25rem !important;
    height: 2.5rem !important;
    background-color: #000;
    color: white;
    border-radius: 0.625rem;
    cursor: pointer;
    box-shadow: 0.0625rem 0.125rem 0.125rem 0px rgba(112, 178, 241, 1);
    flex-shrink: 0;
  }
  
  .medicals a {
    color: white;
    width: 15.5rem;
    text-align: start;
    cursor: pointer;
  }
  
  .medicals {
    width: 15.5rem;
    height: 2.5rem;
    border: 0.0625rem solid rgba(217, 217, 217, 1);
    border-radius: 0.625rem;
    padding-left: 1rem;
    padding-top: 0.1875rem;
    font-size: 1.25rem;
    color: #000;
    display: flex;
    background-color: rgba(112, 178, 241, 1);
  }
  
  .medical {
    width: 15.5rem;
    height: 2.5rem;
    border: 0.0625rem solid rgba(217, 217, 217, 1);
    border-radius: 0.625rem;
    padding-left: 1rem;
    padding-top: 0.1875rem;
    font-size: 1.25rem;
    color: #000;
    display: flex;
    align-items: start;
  }
  
  .exam {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }
  
  .name {
    font-family: Tajawal;
    font-weight: 700;
    font-size: 1.4375rem;
    width: 15.5rem;
  }
  
  .package {
    width: 86.625rem;
    height: 7.375rem;
    border: 0.1875rem solid rgba(185, 185, 185, 1);
    border-radius: 0.625rem;
    padding: 1.5rem;
    display: flex;
    align-items: start;
    gap: 1.5rem;
  }
  
  .mid {
    max-height: 64.25rem;
    width: 89.75rem;
    border-radius: 1.25rem;
    box-shadow: 0.34375rem 0.4375rem 0.25rem 0px rgba(0, 0, 0, 1);
    background: rgba(255, 255, 255, 1);
    padding-top: 3.125rem;
    padding-left: 1.5625rem;
    padding-bottom: 1.5625rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow-y: scroll;
  }
  </style>
  
