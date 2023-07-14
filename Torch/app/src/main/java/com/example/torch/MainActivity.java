package com.example.torch;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.pm.PackageManager;
import android.hardware.camera2.CameraManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private Button b1;

public Button on_off_btn;
public Boolean is_on=true;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        b1=findViewById(R.id.button2);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String cameraId=null;

                Boolean flash=getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH);

                if(flash)
                {
                    try{
                    CameraManager cameraManager = (CameraManager) getSystemService(Context.CAMERA_SERVICE);
                    cameraId = cameraManager.getCameraIdList()[0];
                    if (is_on) {
                        cameraManager.setTorchMode(cameraId, is_on);
                        is_on = false;
                    } else {
                        cameraManager.setTorchMode(cameraId, is_on);
                        is_on = true;
                    }
                }catch (Exception e){
                        e.printStackTrace();

                    }

                }
            }

            }
        );

    }
}