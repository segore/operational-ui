This component displays an indicator of status.

### Usage

```jsx
import * as React from "react"
import { Card, Status } from "@operational/components"
;<div style={{ maxWidth: 200 }}>
  <Card>
    <Status state="success">Deployed</Status>
  </Card>
  <Card>
    <Status state="running">Running</Status>
  </Card>
  <Card>
    <Status state="error">Offline</Status>
  </Card>
  <Card>
    <Status state="neutral">Neutral</Status>
  </Card>
</div>
```