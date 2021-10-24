import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import { Diagnose } from "../../actions/dignosis";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Diagnosis = () => {
  document.title = "AI Diagnosis - Autodoc";
  const dispatch = useDispatch();
  const tab = useMediaQuery("(max-width:630px)");
  const [symptoms, setSymp] = useState({
    "Bony lumps on finger joints": 0,
    "Murphy's sign": 0,
    "Stahli's line": 0,
    "acute abdominal pain": 0,
    "abdominal bloating": 0,
    "abdominal tenderness": 0,
    "abnormal sensation": 0,
    "abnormally hard consistency excretions": 0,
    abortion: 0,
    "bacterial abcess": 0,
    forgetfulness: 0,
    "trouble swallowing": 0,
    ache: 0,
    "adverse effect": 0,
    "adverse reaction": 0,
    agitation: 0,
    "bowel obstruction": 0,
    "alcohol binge episode": 0,
    "alcohol withdrawal": 0,
    ambidexterity: 0,
    "chest pain or discomfort": 0,
    anorexia: 0,
    "loss of smell": 0,
    "inability to swallow": 0,
    apyrexial: 0,
    "joint pain": 0,
    ascites: 0,
    "tremors in hand": 0,
    "lack of energy": 0,
    asymptomatic: 0,
    "body co-ordination issues": 0,
    atypia: 0,
    "perception of aura": 0,
    "early awakening": 0,
    "dry cough": 0,
    bedridden: 0,
    hyperactivity: 0,
    "increased motor activity": 0,
    blackout: 0,
    "pale skin": 0,
    "vaginal bleeding": 0,
    "decreased bowel sounds": 0,
    "slower heart rate": 0,
    "slow movements or freezing": 0,
    "sudden flare of pain": 0,
    "breathing sounds decreased": 0,
    "sudden stopping of breath": 0,
    "breech presentation": 0,
    "murmur through stethoscope": 0,
    "burning  sensation": 0,
    "weakness due to illness": 0,
    "enlarged heart": 0,
    "cardiovascular finding": 0,
    "cardiovascular event": 0,
    catatonia: 0,
    "catching breath": 0,
    "muscle spasm/cramp": 0,
    "chest tightness": 0,
    "chest discomfort": 0,
    chill: 0,
    choke: 0,
    cicatrisation: 0,
    "clammy skin": 0,
    "pain in lower body": 0,
    "involuntary muscle contraction": 0,
    clumsiness: 0,
    "cramp in intestines": 0,
    "clear consciousness": 0,
    constipation: 0,
    "abnormal coordination": 0,
    cough: 0,
    "cushingoid facies": 0,
    "cushingoid habitus": 0,
    "bluish skin": 0,
    "cystic lesion": 0,
    debilitation: 0,
    decompensation: 0,
    "decreased translucency": 0,
    "decreased body weight": 0,
    "decreased stool caliber": 0,
    diarrhea: 0,
    difficulty: 0,
    "difficulty passing urine": 0,
    disequilibrium: 0,
    "distended abdomen": 0,
    "distress respiratory": 0,
    "disturbed family": 0,
    dizziness: 0,
    "dizzy spells": 0,
    drool: 0,
    drowsiness: 0,
    dullness: 0,
    dysarthria: 0,
    dysdiadochokinesia: 0,
    dysesthesia: 0,
    dyspareunia: 0,
    dyspnea: 0,
    "dyspnea on exertion": 0,
    dysuria: 0,
    ecchymosis: 0,
    egophony: 0,
    elation: 0,
    "emphysematous change": 0,
    "energy increased": 0,
    enuresis: 0,
    erythema: 0,
    "estrogen use": 0,
    "excruciating pain": 0,
    exhaustion: 0,
    "extrapyramidal sign": 0,
    "extreme exhaustion": 0,
    "facial paresis": 0,
    fall: 0,
    fatigability: 0,
    fatigue: 0,
    "fear of falling": 0,
    fecaluria: 0,
    "feces in rectum": 0,
    "feeling hopeless": 0,
    "feeling suicidal": 0,
    "feeling strange": 0,
    "feels hot/feverish": 0,
    fever: 0,
    flare: 0,
    flatulence: 0,
    floppy: 0,
    flushing: 0,
    "focal seizures": 0,
    "food intolerance": 0,
    formication: 0,
    frail: 0,
    fremitus: 0,
    "frothy sputum": 0,
    gag: 0,
    "gasping for breath": 0,
    "general discomfort": 0,
    "general unsteadiness": 0,
    "giddy mood": 0,
    "gravida 0": 0,
    "gravida 10": 0,
    "green sputum": 0,
    groggy: 0,
    "guaiac positive": 0,
    gurgle: 0,
    "hacking cough": 0,
    haemoptysis: 0,
    haemorrhage: 0,
    "auditory hallucinations": 0,
    "visual hallucinations": 0,
    "has religious belief": 0,
    headache: 0,
    heartburn: 0,
    "heavy feeling": 0,
    "heavy legs": 0,
    hematochezia: 0,
    "hematocrit decreased": 0,
    hematuria: 0,
    "heme positive": 0,
    "hemianopsia homonymous": 0,
    hemiplegia: 0,
    "hemodynamically stable": 0,
    hepatomegaly: 0,
    hepatosplenomegaly: 0,
    hirsutism: 0,
    "history of blackout": 0,
    hoard: 0,
    hoarseness: 0,
    homelessness: 0,
    "homicidal thoughts": 0,
    "hot flush": 0,
    hunger: 0,
    hydropneumothorax: 0,
    hyperacusis: 0,
    hypercapnia: 0,
    hyperemesis: 0,
    "hyperhidrosis disorder": 0,
    hyperkalemia: 0,
    hypersomnia: 0,
    hypersomnolence: 0,
    hypertonicity: 0,
    hyperventilation: 0,
    hypesthesia: 0,
    hypoalbuminemia: 0,
    "hypocalcemia result": 0,
    hypokalemia: 0,
    hypokinesia: 0,
    hypometabolism: 0,
    hyponatremia: 0,
    hypoproteinemia: 0,
    hypotension: 0,
    hypothermia: 0,
    hypotonic: 0,
    hypoxemia: 0,
    immobile: 0,
    "impaired cognition": 0,
    "inappropriate affect": 0,
    incoherent: 0,
    "indifferent mood": 0,
    "intermenstrual heavy bleeding": 0,
    intoxication: 0,
    "irritable mood": 0,
    "jugular venous distention": 0,
    "labored breathing": 0,
    lameness: 0,
    "large-for-dates fetus": 0,
    "left atrial hypertrophy": 0,
    lesion: 0,
    lethargy: 0,
    lightheadedness: 0,
    "lip smacking": 0,
    "loose associations": 0,
    "low back pain": 0,
    "lung nodule": 0,
    "macerated skin": 0,
    macule: 0,
    malaise: 0,
    "mass in breast": 0,
    "mass of body structure": 0,
    "mediastinal shift": 0,
    "mental status changes": 0,
    "metastatic lesion": 0,
    milky: 0,
    moan: 0,
    monoclonal: 0,
    monocytosis: 0,
    "mood depressed": 0,
    moody: 0,
    "motor retardation": 0,
    "muscle hypotonia": 0,
    "muscle twitch": 0,
    myalgia: 0,
    mydriasis: 0,
    myoclonus: 0,
    "nasal discharge present": 0,
    "nasal flaring": 0,
    nausea: 0,
    "nausea and vomiting": 0,
    "neck stiffness": 0,
    neologism: 0,
    nervousness: 0,
    "night sweat": 0,
    nightmare: 0,
    "no known drug allergies": 0,
    "no status change": 0,
    "noisy respiration": 0,
    "non-productive cough": 0,
    nonsmoker: 0,
    numbness: 0,
    "numbness of hand": 0,
    oliguria: 0,
    orthopnea: 0,
    orthostasis: 0,
    "out of breath": 0,
    overweight: 0,
    pain: 0,
    "pain chest": 0,
    "pain abdominal": 0,
    "pain back": 0,
    "pain foot": 0,
    "pain in lower limb": 0,
    "neck pain": 0,
    "painful swallowing": 0,
    pallor: 0,
    palpitation: 0,
    panic: 0,
    "pansystolic murmur": 0,
    "para 1": 0,
    "para 2": 0,
    paralyse: 0,
    paraparesis: 0,
    paresis: 0,
    paresthesia: 0,
    "passed stones": 0,
    "patient non compliance": 0,
    "pericardial friction rub": 0,
    phonophobia: 0,
    photophobia: 0,
    photopsia: 0,
    "pin-point pupils": 0,
    "pleuritic pain": 0,
    pneumatouria: 0,
    polydypsia: 0,
    polymyalgia: 0,
    polyuria: 0,
    "poor dentition": 0,
    "poor feeding": 0,
    "posterior rhinorrhea": 0,
    posturing: 0,
    "presence of q wave": 0,
    "pressure chest": 0,
    "previous pregnancies": 0,
    primigravida: 0,
    prodrome: 0,
    "productive cough": 0,
    "projectile vomiting": 0,
    "prostate tender": 0,
    prostatism: 0,
    proteinemia: 0,
    pruritus: 0,
    "pulse absent": 0,
    "pulsus paradoxus": 0,
    pustule: 0,
    "qt interval prolonged": 0,
    "r wave feature": 0,
    rale: 0,
    "rambling speech": 0,
    "rapid shallow breathing": 0,
    "red blotches": 0,
    redness: 0,
    "regurgitates after swallowing": 0,
    "renal angle tenderness": 0,
    "rest pain": 0,
    retch: 0,
    retropulsion: 0,
    "rhd positive": 0,
    rhonchus: 0,
    "rigor - temperature-associated observation": 0,
    "rolling of eyes": 0,
    "room spinning": 0,
    "satiety early": 0,
    "scar tissue": 0,
    sciatica: 0,
    "scleral icterus": 0,
    "scratch marks": 0,
    sedentary: 0,
    seizure: 0,
    "sensory discomfort": 0,
    "shooting pain": 0,
    "shortness of breath": 0,
    "side pain": 0,
    "sinus rhythm": 0,
    sleeplessness: 0,
    sleepy: 0,
    "slowing of urinary stream": 0,
    sneeze: 0,
    sniffle: 0,
    snore: 0,
    snuffle: 0,
    "soft tissue swelling": 0,
    "sore to touch": 0,
    spasm: 0,
    "speech slurred": 0,
    splenomegaly: 0,
    "spontaneous rupture of membranes": 0,
    "sputum purulent": 0,
    "st segment depression": 0,
    "st segment elevation": 0,
    stiffness: 0,
    "stinging sensation": 0,
    "stool color yellow": 0,
    stridor: 0,
    "stuffy nose": 0,
    stupor: 0,
    suicidal: 0,
    superimposition: 0,
    sweat: 0,
    "sweating increased": 0,
    swelling: 0,
    "symptom aggravating factors": 0,
    syncope: 0,
    "systolic ejection murmur": 0,
    "systolic murmur": 0,
    "t wave inverted": 0,
    tachypnea: 0,
    tenesmus: 0,
    terrify: 0,
    thicken: 0,
    "throat sore": 0,
    "throbbing sensation quality": 0,
    tinnitus: 0,
    tired: 0,
    titubation: 0,
    "todd paralysis": 0,
    "tonic seizures": 0,
    transaminitis: 0,
    transsexual: 0,
    tremor: 0,
    "tremor resting": 0,
    "tumor cell invasion": 0,
    "unable to concentrate": 0,
    "unconscious state": 0,
    uncoordination: 0,
    underweight: 0,
    unhappy: 0,
    unresponsiveness: 0,
    "unsteady gait": 0,
    unwell: 0,
    "urge  incontinence": 0,
    "urgency of micturition": 0,
    "urinary hesitation": 0,
    urinoma: 0,
    "verbal auditory hallucinations": 0,
    "verbally abusive behavior": 0,
    vertigo: 0,
    "vision blurred": 0,
    vomiting: 0,
    weepiness: 0,
    "weight gain": 0,
    welt: 0,
    "wheelchair bound": 0,
    wheezing: 0,
    withdraw: 0,
    worry: 0,
    "yellow sputum": 0,
  });

  const dia = useSelector((state) => state.appointments.diagnosis);
  const select = (symp, val) => {
    setSymp((prev) => {
      return { ...prev, [symp]: val };
    });
  };

  const Submit = async () => {
    dispatch(Diagnose(Object.values(symptoms)));
  };

  return (
    <>
      <Navbar />
      <CssBaseline />
      <main
        style={{
          backgroundImage: "linear-gradient(180deg, #00c6ff 0%, #0072ff 100%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Container
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "2% 0",
          }}
        >
          <StyledToolbar />
          <Paper
            elevation={12}
            sx={{
              width: tab ? "90%" : "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2%",
            }}
          >
            <div className="header-small">
              AI Diagnosis
              <Divider />
            </div>
            {dia && dia !== "" && (
              <Grid container justifyContent="center">
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography
                    variant="h4"
                    style={{ fontFamily: "Montserrat, sans serif" }}
                  >
                    AI Prediction:
                    <Divider />
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography
                    variant="h3"
                    style={{ fontFamily: "Montserrat, sans serif" }}
                  >
                    {dia}
                  </Typography>
                </Grid>
              </Grid>
            )}
            <Grid container justifyContent='center'>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3%",
                }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    p: 0.5,
                    m: 0,
                    minWidth: "100%",
                    maxHeight: "20em",
                    overflowY: "scroll",
                  }}
                  component="ul"
                >
                  {Object.keys(symptoms).map((data, index) => {
                    const ret =
                      Object.values(symptoms)[index] === 1 ? (
                        <ListItem key={index}>
                          <Chip
                            label={data}
                            onClick={() => {
                              select(data, 0);
                            }}
                          />
                        </ListItem>
                      ) : (
                        ""
                      );
                    return ret;
                  })}
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3%",
                }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    p: 0.5,
                    m: 0,
                    minWidth: "100%",
                    maxHeight: "20em",
                    overflowY: "scroll",
                  }}
                  component="ul"
                >
                  {Object.keys(symptoms).map((data, index) => {
                    const ret =
                      Object.values(symptoms)[index] === 0 ? (
                        <ListItem key={index}>
                          <Chip
                            label={data}
                            onClick={() => {
                              select(data, 1);
                            }}
                          />
                        </ListItem>
                      ) : (
                        ""
                      );
                    return ret;
                  })}
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => {
                    Submit();
                  }}
                  sx={{ width: "60%" }}
                >
                  Diagnose
                </Button>
              </Grid>
              <Grid
                item
                xs={8}
                style={{ display: "flex", justifyContent: "center", marginTop: '2%' }}
              >
                <Typography
                  variant="p"
                  align='center'
                  style={{ fontFamily: "Montserrat, sans serif" }}
                >
                  Any and all predictions made by the AI are not likely to be 100% accurate.<br /> 
                  The AI is in its infant stage and it will only get better from here. <br />
                  Please consult a doctor for better diagnosis.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </main>
    </>
  );
};

export default Diagnosis;
