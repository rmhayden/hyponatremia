<a name="readme-top"></a>

# Sim Case: Hyponatremia - Virtual Patient Simulation

### Introduction:
A virtual patient simulation developed to help train internal medicine physicians and advanced practice providers on caring for hospitalized patients with one of the most challenging yet common problems within internal medicine: hyponatremia. Hyponatremia is a disorder of excess water, which in the most severe cases may be lethal. In order to properly assess and then treat a patient with hyponatremia, a provider must have a strong grasp of volume status and tonicity balance, which are independent yet interactive. Our hope is that practicing hyponatremia management through our interactive virtual simulation application will provide a low-stakes environment for learners to truly understand the complex underlying physiology.

[Deployed App](https://renalprimers.com/sims/hyponatremia)

[GitHub Page](https://github.com/william-hu-codes/hyponatremia)

### SIMULATION EXPERIENCE:
1. Just as in a real hospital experience, the provider will receive a page regarding a new patinet in the emergency room with hyponatremia, and general instructions regarding the simulation will be provided at this time (Wireframes - Figure 1)
2. Part 1 of Simulation: the learner will then navigate to a new page where they will meet and assess the patient (Wireframes - Figure 2). Here, the learner will ask pertinent questions and interpret available data to formulate a clinical impression and place preliminary diagnostic and therpeutic orders. The underlying patient case will be based on one of three underlying "illness scripts" (see Illness Scripts section for details), which will provide hard-coded scaffolding of the case logic while specific details of the patient experience and history will come from OpenAI (chatGPT).
3. On a subsequent page, the learner will be able to compare their responses to those of our export solution provided (Wireframes - Figure 3).
4. Following the initial impression, the learner will then begin Part 2: active management (Wireframes - Figure 4). The active management phase will take place over a simulated 24 hour time period. The learner will have to update orders at each time interval in an effort to correct the hyponatremia (without dangerous overcorrection) while simultaneously optimizing any other pertinent disorders, such as decompensated volume status.
5. Following the active management phase, the learner will then receive targeted feedback on their management approach (Wireframes - Figure 5). The learner will have the option to review orders and the tonicity balance / volume status compartments figure for each prior time point in an effort to study their approach in retrospect.
6. As an icebox feature, we propose to provide additional "review content modules" that may be provided to the learner at this final feedback phase, targeted to any specific errors in their management that may have been identified. We similarly will aim to provide references for the tonicity balance formulae, physiology references, and clinical guidelines that apply to our simulation application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### INNOVATIVE FEATURES:
- Every patient case will be completely unique: one of the three illness scripts (hypoperfusion, polydipsia, SIADH) will be randomly initialized, providing a hard-coded scaffolding for the simulation logic and physiology; specific human-centric details from the patient will then come from integration of the OpenAI (chatGPT) 
- The flow of the simulation, from the initial evaluation to the subsequent 24-hour active management phase, precisely recreates the real-world experience of caring for a hospitalized patient with hyponatremia
- Modeling human physiology with JavaScript by applying real clinical formulae: our modulator functions, which will code all logic for changes over time for tonicity balance, volume status, and other clinical features along with interactions between these entities as well as pertinent therapeutic interventions, which may also be updated between time-intervals
- Rendering this physiology in real time with the compartment model of tonicity balanace and volume status will help the learner visualize the underlying physiology and learn to think about hyponatremia like a nephrologist

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## PHYSIOLOGIC MODELS / BACKEND LOGIC

Hyponatremia is a disorder of excess water, which in the most severe cases may be lethal. Specific pathophysiologic mechanisms exist that lead to hyponatremia, and other factors, such as volume status, may further interact with tonicity balance (affecting sodium concentration), even though they may be regulated by distinct physiologic mechanisms. Given this complexity, we must accurately model all pertinent homeostatic systems in order to provide a realistic virtual patient simulation.

![Alt text](docs/planning/image-10.png)
As mapped above, our backend models and modulator functions will recapitulate the human physiology volume status and tonicity balance while further integrating the three main pathophysiologic processes, coded as distinct "illness scripts", that can lead to hyponatremia: polydipsia, hypoperfusion, and SIADH (syndrome of inappropriate anti-diuretic hormone)
<br></br>

![Alt text](docs/planning/image-1.png)
Hypoperfusion leads to activation of the renin-angiotensin-aldosterone system (RAAS), which allows the body to retain extracellular volume and therefore end-organ perfusion (among other functions). Another consequence of RAAS is a surge in vasopressin, also known as anti-diuretic hormone (ADH), which will further help maintain blood pressure (via V1 receptors) and maximally reabsorb free water in the nephron (by way of V2 receptors). Although the release of ADH is also regulated by neurons that respond to changes in tonicity balance in the brain in order to maintain osmolality (as marked by serum sodium concentration, specifically), activation of RAAS will also lead to a surge in ADH, independent of serum sodium. By this mechanism, any pathophysiologic process which may lead to renal hypoperfusion (and therefore RAAS activation) will produce a potent stimulus for ADH release, prediposing the patient to hyponatremia. The hypoperfusion-injury is nearly always due to hypovolemia, but it is critical to note that several edematous states may co-exist with this process, such as low output heart failure and cirrhosis.

In assessing a patient with hypoperfusion- (which is most often hypovolemic-) induced hyponatremia, the learner will query openAI to ask the patient targeted questions about possible precipitants of this event. The learner will also need to interpret initial relevant data, such as high urine osm (which marks active ADH) and low urine sodium (which marks RAAS activation), that will support this diagnosis. The learner will order standard diagnostics (including mention of need for closely monitoring, given the risk of over-correction, risking catastrophic central pontine myelinolysis, in this specific context of hypoperfusion-mediated ADH), and the therapy plan of care will be directed to first restore euvolemia.
<br></br>


![Alt text](docs/planning/image-10.png)
There are innumerable causes of the syndrome of inappropriate ADH (SIADH), but in our simulation we will initially stick to the most common causes: pain, nausea, classic culprit medications, and typical cormobid illnesses (such as cancer). The learner will exclude other precipitants of ADH release by history to suspect SIADH, and the learner must interpret the urine studies that will support SIADH (high urine sodium, high urine osm). The user may spectulate on the precise cause of SIADH and recommend specific further workup as pertinent. Plan of care will focus on eliminating or reversing the underlying precipitant along with standard monitoring, diagnostics, and therapy, with the most important being fluid restriction +/- hypertonic (3%) saline as necessary and/or oral medications that will enhance free water excretion (such as salt tabs or urea packets) or blunt the nephrons ability to concentrate urine beyond the point of iso-tonicity (such as with loop diuretics).
<br></br>

![Alt text](docs/planning/image-3.png)
Perhaps the simplest illness script is polydipsia; there need not be a deranagement in ADH resulting in hyponatremia (by way of limited free water excretion) is sufficient free water is consumed orally such that the rate of free water intake exceeds that of free water output. For the initial version of this simulation, we will focus on the most common reasons for polydipsia, which are most often in the context of a psychiatric comorbidity or a cultural/preferential reason for excessive intake of water by the patient.
<br></br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Intentional Exclusions and Possible Icebox Features:
- will initially exclude low output heart failure and cirrhosis from the hypoperfusion-mediated illness script, limiting this to hypovolemic precipitants; later, this may be added
- hyponatremia, as modeled with our schematics above, exists only in the absence of concurrent renal failure, as excess water in this context may be due to the distinct process of impaired glomerular filtration; for now, we will exclude concurrent renal failure from our illness scripts
- in reality, patients often exhibit multiple pathophysiologic processes simultaneously, such that multiple illness scripts might be activated in parallel: for example, a patient with severe vomiting might develop stimuli for ADH both through hypovolemia from vomiting and by way of nausea-induced SIADH; for our initial version of this simulation, we will limit illness scripts to one per simulation, though future versions of this application may include multiple illness scripts activated simultaneously
- as outlined above, we will focus on the most common causes of SIADH, as the complete list of causes would be beyond the scope of this application
- we are excluding low-solute etiologies of hyponatremia (aka "tea and toast")
<br></br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## About the Developers:
As two healthcare providers with collective experience across the full spectrum of patient care, from emergency room and step-down unit nursing to sub-specialist experience as a nephrology consultant, we seek to harness the unique combination of our growing skillset as software engineers along with our broad background in healthcare in order to create cutting-edge technologies that may improve patient care--from educational tools like this simulation to other technologies, such as our [renal consult note generator application](RenalConsults.com).

- William Hu, RN - [LinkedIn](www.linkedin.com/in/william-wl-hu) | [GitHub](https://github.com/william-hu-codes)
- Robert Hayden, MD - [LinkedIn](https://www.linkedin.com/in/robert-m-hayden/) | [GitHub](https://github.com/rmhayden)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With
- ![Static Badge](https://img.shields.io/badge/JavaScript-grey?logo=javascript&link=https%3A%2F%2Fwww.javascript.com%2F)
- ![Static Badge](https://img.shields.io/badge/HTML5-grey?logo=HTML5)
- ![Static Badge](https://img.shields.io/badge/CSS-grey?logo=CSS3)
- ![Static Badge](https://img.shields.io/badge/node.js-grey?logo=node.js)
- ![Static Badge](https://img.shields.io/badge/Mongoose-grey?logo=mongoose)
- ![Static Badge](https://img.shields.io/badge/MongoDB-grey?logo=mongodb)
- ![Static Badge](https://img.shields.io/badge/Express-grey?logo=express)
- ![Static Badge](https://img.shields.io/badge/React-grey?logo=react&link=https%3A%2F%2Freact.dev%2F)
- ![Static Badge](https://img.shields.io/badge/GitHub-grey?logo=github)
- ![Static Badge](https://img.shields.io/badge/openAI-grey?logo=openAI)
- ![Static Badge](https://img.shields.io/badge/Shields.io-grey?logo=shields.io)
- ![Static Badge](https://img.shields.io/badge/React-Icons-grey?logo=react&logoColor=red)
- ![Static Badge](https://img.shields.io/badge/Heroku-grey?logo=heroku)
- ![Static Badge](https://img.shields.io/badge/Bluehost-grey?logo=bluehost)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
