<script>
export default {
  data() {
    return {
      activeFilter: "serum", // Default selected filter
      searchQuery: "", // Bind search input to this

      serumData: [
      ["Serum", "Reference Range", "SI Reference Interval"],
        ["Sodium (Na+)", "136–146 mEq/L", "136–146 mmol/L"],
        ["Potassium (K+)", "3.5–5.0 mEq/L", "3.5–5.0 mmol/L"],
        ["Chloride (Cl–)", "95–105 mEq/L", "95–105 mmol/L"],
        ["Bicarbonate (HCO3 )", "22–28 mEq/L", "22–28 mmol/L"],
        ["Urea nitrogen", "7–18 mg/dL", "2.5–6.4 mmol/L"],
        ["Creatinine", "0.6–1.2 mg/dL", "53–106 μmol/L"],
        ["Glucose (Fasting)", "70–100 mg/dL", "3.8–5.6 mmol/L"],
        ["Glucose (Random, non-fasting)", "<140 mg/dL", "<7.77 mmol/L"],
        ["Calcium", "8.4–10.2 mg/dL", "2.1–2.6 mmol/L"],
        ["Magnesium (Mg2+)", "1.5–2.0 mg/dL", "0.75–1.0 mmol/L"],
        ["Phosphorus (inorganic)", "3.0–4.5 mg/dL", "1.0–1.5 mmol/L"],
        ["Hepatic", "Reference Range", "SI Reference Interval"],
        ["Alanine aminotransferase(ALT)", "10–40 U/L", "10–40 U/L"],
        ["Aspartate aminotransferase(AST)", "12–38 U/L", "12–38 U/L"],
        ["Alkaline phosphatase", "25–100 U/L", "25–100 U/L"],
        ["Amylase", "25–125 U/L", "25–125 U/L"],
        ["Bilirubin, total // direct", "0.1–1.0 mg/dL // 0.0–0.3 mg/dL", "2–17 μmol/L // 0–5 μmol/L"],
        ["Proteins, total", "6.0–7.8 g/dL", "60–78 g/L"],
        ["Albumin", "3.5–5.5 g/dL", "35–55 g/L"],
        ["Globulin", "2.3–3.5 g/dL", "23–35 g/L"],  
        ["Lipids", "Reference Range", "SI Reference Interval"],
        ["Cholesterol(Total)", "<200 mg/dL", "<5.2 mmol/L"],
        ["Cholesterol(High)", ">240 mg/dL", ">6.2 mmol/L"],
        ["HDL", "40–60 mg/dL", "1.0–1.6 mmol/L"],
        ["LDL", "<160 mg/dL", "<4.2 mmol/L"],
        ["Triglycerides(Normal)", "<150 mg/dL", "<1.70 mmol/L"],
        ["Triglycerides (Borderline)", "151–199 mg/dL", "1.71–2.25 mmol/L"],
        ["Iron Studies", "Reference Range", "SI Reference Interval"],
        ["Ferritin(Male)", "20–250 ng/mL", "20–250 μg/L"],
        ["Ferritin(Female)", "10–120 ng/mL", "10–120 μg/L"],
        ["Iron (Male)", "65–175 μg/dL", "11.6–31.3 μmol/L"],
        ["Iron (Female)", "50–170 μg/dL", "9.0–30.4 μmol/L"],
        ["Total iron-binding capacity", "250–400 μg/dL", "44.8–71.6 μmol/L"],
        ["Transferrin", "200–360 mg/dL", "2.0–3.6 g/L"],
        ["Hormones", "Reference Range", "SI Reference Interval"],
        ["Follicle-stimulating hormone ", "Male: 4–25 mIU/mL", "4–25 IU/L"],
        ["Follicle-stimulating hormone", "Female: premenopause 4–30 mIU/mL", "4–30 IU/L"],
        ["Follicle-stimulating hormone ", "midcycle peak 10–90 mIU/mL", "10–90 IU/L"],
        ["Follicle-stimulating hormone ", "postmenopause 40–250 mIU/mL", "40–250 IU/L"],
        ["Luteinizing hormone", "Male: 6–23 mIU/mL", "6–23 IU/L"],
        ["Luteinizing hormone", "Female: follicular phase 5–30  &mIU/mL", "5–30 IU/L"],
        ["Luteinizing hormone", "midcycle U/mL", "75–150 IU/L"],
        ["Luteinizing hormone", "postmenopause 40–250 mIU/mL", "40–250 IU/L"],
        ["Growth hormone (Fasting)", "<5 ng/mL", "<5 μg/L"],
        ["Growth hormone (Provocative Stimuli)", ">7 ng/mL", ">7 μg/L"],
        ["Prolactin (Male)", "<17 ng/mL", "<17 μg/L"],
        ["Prolactin (Female)", "<25 ng/mL", "<25 μg/L"],
        ["Cortisol", " 0800 h: 5–23 μg/dL ", "138–635 nmol/L"],
        ["Cortisol", "2000 h: <50% of 0800 h", "82–413 nmol/L"],
        ["Cortisol", "<50% of 0800 h", "Fraction of 0800 h: <0.50"],
        ["TSH", "0.4–4.0 μU/mL", "0.4–4.0 mIU/L"],
        ["Triiodothyronine (T3) (RIA)", "100–200 ng/dL", "1.5–3.1 nmol/L"],
        ["Triiodothyronine (T3) Resin Uptake", "25%–35%", "0.25–0.35"],
        ["Thyroxine (T4)", "5–12 μg/dL", "64–155 nmol/L"],
        ["Free T4", "0.9–1.7 ng/dL", "12.0–21.9 pmol/L"],
        ["Thyroidal Iodine (123I) Uptake", "8%–30% of administered dose/24 h", "0.08–0.30/24 h"],
        ["Gases, Arterial Blood (Room Air)", "Reference Range", "SI Reference Interval"],
        ["PO2", "75–105 mm Hg", "10.0–14.0 kPa"],
        ["PCO2", "33–45 mm Hg", "4.4–5.9 kPa"],
        ["pH", "7.35–7.45", "[H+] 36–44 nmol/L"],
      ],
      cerebrospinalData: [
        ["Cerebrospinal", "Reference Range", "SI Reference Interval"],
        ["Cell count", "0–5/mm3", "0–5 × 106/L"],
        ["Chloride", "118–132 mEq/L", "118–132 mmol/L"],
        ["Gamma globulin", "3%–12% total proteins", "0.03–0.12"],
        ["Glucose", "40–70 mg/dL", "2.2–3.9 mmol/L"],
        ["Pressure", "70–180 mm H2O", "70–180 mm H2O"],
        ["Proteins, total", "<40 mg/dL", "<0.40 g/L"],

      ],
      bloodData: [
      ["HEMATOLOGIC", "Reference Range", "SI Reference Interval"],
  ["Hematocrit (Male)", "41%–53%", "0.41–0.53"],
  ["Hematocrit (Female)", "36%–46%", "0.36–0.46"],
  ["Hemoglobin (Male)", "13.5–17.5 g/dL", "135–175 g/L"],
  ["Hemoglobin (Female)", "12.0–16.0 g/dL", "120–160 g/L"],
  ["Mean corpuscular hemoglobin (MCH)", "25–35 pg/cell", "0.39–0.54 fmol/cell"],
  ["Mean corpuscular hemoglobin conc. (MCHC)", "31%–36% Hb/cell", "4.8–5.6 mmol Hb/L"],
  ["Mean corpuscular volume (MCV)", "80–100 μm³", "80–100 fL"],
  ["Plasma (Male)", "25–43 mL/kg", "0.025–0.043 L/kg"],
  ["Plasma (Female)", "28–45 mL/kg", "0.028–0.045 L/kg"],
  ["Red cell (Male)", "20–36 mL/kg", "0.020–0.036 L/kg"],
  ["Red cell (Female)", "19–31 mL/kg", "0.019–0.031 L/kg"],
  ["Leukocyte count (WBC)", "4500–11,000/mm³", "4.5–11.0 × 10⁹/L"],
  ["Neutrophils, segmented", "54%–62%", "0.54–0.62"],
  ["Neutrophils, bands", "3%–5%", "0.03–0.05"],
  ["Lymphocytes", "25%–33%", "0.25–0.33"],
  ["Monocytes", "3%–7%", "0.03–0.07"],
  ["Eosinophils", "1%–3%", "0.01–0.03"],
  ["Basophils", "0%–0.75%", "0.00–0.0075"],
  ["Platelet count", "150,000–400,000/mm³", "150–400 × 10⁹/L"],
  ["Partial thromboplastin time (PTT)", "25–40 seconds", "25–40 seconds"],
  ["Prothrombin time (PT)", "11–15 seconds", "11–15 seconds"],
  ["D-Dimer", "≤250 ng/mL", "≤1.4 nmol/L"],
  ["Reticulocyte count", "0.5%–1.5%", "0.005–0.015"],
  ["Erythrocyte count (Male)", "4.3–5.9 million/mm³", "4.3–5.9 × 10¹²/L"],
  ["Erythrocyte count (Female)", "3.5–5.5 million/mm³", "3.5–5.5 × 10¹²/L"],
  ["Erythrocyte sedimentation rate (Male)", "0–15 mm/h", "0–15 mm/h"],
  ["Erythrocyte sedimentation rate (Female)", "0–20 mm/h", "0–20 mm/h"],
  ["CD4+ T-lymphocyte count", "≥500/mm³", "≥0.5 × 10⁹/L"],
  ["Troponin I", "≤0.04 ng/mL", "≤0.04 µg/L"],
  ["Hemoglobin A1c", "≤6%", "≤42 mmol/mol"],
      ],
      urineData: [
        ["Urine and BMI", "Reference Range", "SI Reference Interval"],
        ["Calcium", "100–300 mg/24 h", "2.5–7.5 mmol/24 h"],
        ["Osmolality", "50–1200 mOsmol/kg H2O", "50–1200 mOsmol/kg H2O"],
        ["Oxalate", "8–40 μg/mL", "90–445 μmol/L"],
        ["Proteins, total", "<150 mg/24 h", "<0.15 g/24 h"],
        ["BODY MASS INDEX (BMI)", " Adult: 19–25 kg/m2", ""],

      ],
    };
  },
  methods: {
    selectFilter(filter) {
      this.activeFilter = filter; // Update the active filter
    },
    isHighlighted(item) {
      if (!this.searchQuery) return false;
      const query = this.searchQuery.toLowerCase();
      // Ignore header rows based on your data structure
      if (["serum", "reference range", "si reference interval", "urine and bmi", "hematologic", "cerebrospinal"].includes(item[0].toLowerCase())) {
        return false;
      }
      return item.some((field) => field.toLowerCase().includes(query));
    },
    getHighlightedText(text) {
      if (!this.searchQuery) return text;
      const regex = new RegExp(`(${this.searchQuery})`, "gi");
      return text.replace(regex, '<span class="highlight">$1</span>');
    },
    scrollToHighlighted() {
      this.$nextTick(() => {
        const highlightedRow = this.$refs.highlightedRow?.find((el) =>
          el?.classList.contains("highlighted-row")
        );
        if (highlightedRow) {
          highlightedRow.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    },
  },
  watch: {
    searchQuery() {
      this.scrollToHighlighted();
    },
  },
};
</script>
<template>
  <div class="lab">
    <!-- Header Section -->
    <div class="out">
      <div class="left">
        <div class="border"></div>
        <span>Lab Values</span>
      </div>
      <img class="outdoor" src="../assets/outdoor.svg" alt="Outdoor Icon" />
    </div>

    <!-- Search Bar -->
    <div class="search">
      <input
        v-model="searchQuery"
        class="uricacid"
        type="text"
        placeholder="Search"
      />
    </div>

    <!-- Filter Buttons -->
    <div class="filters">
      <button
        class="filter-button"
        :class="{ active: activeFilter === 'serum' }"
        @click="selectFilter('serum')"
      >
        Serum
      </button>
      <button
        class="filter-button"
        :class="{ active: activeFilter === 'cerebrospinal' }"
        @click="selectFilter('cerebrospinal')"
      >
        Cerebrospinal
      </button>
      <button
        class="filter-button"
        :class="{ active: activeFilter === 'blood' }"
        @click="selectFilter('blood')"
      >
        Blood
      </button>
      <button
        class="filter-button"
        :class="{ active: activeFilter === 'urine' }"
        @click="selectFilter('urine')"
      >
        Urine and BMI
      </button>
    </div>

    <!-- Content Section -->
    <div class="content">
      <div v-show="activeFilter === 'serum'" class="content-box">
        <div
          v-for="(item, index) in serumData"
          :key="index"
          :class="{ 'highlighted-row': isHighlighted(item) }"
          class="contentone"
          ref="highlightedRow"
        >
          <span
            v-html="getHighlightedText(item[0])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[1])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[2])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
        </div>
      </div>

      <!-- Repeat for other filters, example: cerebrospinalData -->
      <div v-show="activeFilter === 'cerebrospinal'" class="content-box">
        <div
          v-for="(item, index) in cerebrospinalData"
          :key="index"
          :class="{ 'highlighted-row': isHighlighted(item) }"
          class="contentone"
          ref="highlightedRow"
        >
          <span
            v-html="getHighlightedText(item[0])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[1])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[2])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
        </div>
      </div>

      <!-- Repeat for bloodData -->
      <div v-show="activeFilter === 'blood'" class="content-box">
        <div
          v-for="(item, index) in bloodData"
          :key="index"
          :class="{ 'highlighted-row': isHighlighted(item) }"
          class="contentone"
          ref="highlightedRow"
        >
          <span
            v-html="getHighlightedText(item[0])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[1])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[2])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
        </div>
      </div>

      <!-- Repeat for urineData -->
      <div v-show="activeFilter === 'urine'" class="content-box">
        <div
          v-for="(item, index) in urineData"
          :key="index"
          :class="{ 'highlighted-row': isHighlighted(item) }"
          class="contentone"
          ref="highlightedRow"
        >
          <span
            v-html="getHighlightedText(item[0])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[1])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
          <span
            v-html="getHighlightedText(item[2])"
            :class="index === 0 ? 'un' : 'no'"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.highlighted-row {
  background-color: rgba(255, 234, 0, 1);
  font-weight: 800;
}

.highlight {
  background-color: rgba(255, 234, 0, 1);
  font-weight: 800;
}

.no {
  width: 6.25rem; /* 100px */
  height: 3.125rem; /* 50px */
  border-top: 0.0625rem solid black; /* 1px */
  display: flex;
  align-items: center;
  font-size: 0.6875rem; /* 11px */
}

.un {
  font-family: Inter;
  font-size: 0.8125rem; /* 13px */
  font-weight: 900;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  width: 6.25rem; /* 100px */
  height: 1.875rem; /* 30px */
}

.contentone {
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 3.125rem; /* 50px */
}

.lab {
  position: fixed;
  right: 2.5rem; /* 40px */
  top: 4.375rem; /* 70px */
  height: 37.5rem; /* 600px */
  width: 25rem; /* 400px */
  overflow-y: scroll;
  background-color: rgba(77, 153, 224, 1);
  z-index: 555555;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 0.625rem; /* 10px */
}

.out {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem; /* 16px */
}

.out .left {
  display: flex;
  align-items: center;
  gap: 0.8125rem; /* 13px */
  font-family: Inter, sans-serif;
  font-size: 1.375rem; /* 22px */
  font-weight: 400;
  line-height: 1.5rem; /* 24px */
  color: white;
}

.border {
  width: 0.4375rem; /* 7px */
  height: 1.875rem; /* 30px */
  border-radius: 1.25rem; /* 20px */
  background: rgba(255, 255, 255, 1);
}

.outdoor {
  height: 2.1875rem; /* 35px */
}

.search {
  width: 99%;
  min-height: 3.75rem; /* 60px */
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.uricacid {
  width: 97%;
  height: 2.5rem; /* 40px */
  padding: 0.625rem; /* 10px */
  background-color: white;
  font-size: 1.25rem; /* 20px */
  border: none;
  border-radius: 0.3125rem; /* 5px */
}

.filters {
  display: flex;
  gap: 0.5rem; /* 8px */
  margin-top: 0.625rem; /* 10px */
}

.filter-button {
  width: 5.625rem; /* 90px */
  height: 2.375rem; /* 38px */
  background-color: white;
  border-radius: 1.25rem; /* 20px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem; /* 13px */
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border: none;
}

.filter-button.active {
  background-color: rgba(255, 234, 0, 1);
  box-shadow: 0px 0px 0.4375rem 0px rgba(0, 0, 0, 1) inset; /* 7px */
}

.content {
  width: 99%;
  max-height: 25.625rem; /* 410px */
  overflow-y: scroll;
  background-color: white;
  margin-top: 1.25rem; /* 20px */
}

.content-box {
  background-color: #f0f0f0;
  border: 0.0625rem solid #ddd; /* 1px */
  border-radius: 0.3125rem; /* 5px */
  display: flex;
  flex-direction: column;
  align-self: start;
  justify-content: start;
  padding-left: 0.625rem; /* 10px */
  padding-right: 0.625rem; /* 10px */
  padding-top: 0.3125rem; /* 5px */
  gap: 0.1875rem; /* 3px */
}
</style>

