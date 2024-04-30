import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>mentics online-ml</Title>
      <h1>mentics online-ml</h1>
      <p>
        This project ingests streaming data and runs inference on a rolling window.
        It also continually labels and trains the new data.
        If a new model is found to consistently outperform the previous model on a holdout set,
        it will automatically deploy the new model for inference.
      </p>
      <p>
        It's under active daily development. You can review the <a href="https://github.com/mentics-online-ml/polyrepo">source code on github</a>.
      </p>
    </main>
  );
}
