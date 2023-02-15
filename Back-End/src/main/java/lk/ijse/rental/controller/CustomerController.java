package lk.ijse.rental.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    private static final ArrayList<String> allImages = new ArrayList<>();

//    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity uploadFile(@RequestPart("myFile") MultipartFile myFile, @RequestPart("myFile") byte[] isFile, @RequestPart("myFile") Part myPart) {
//
//        /*
//         * There are three ways we can obtain this value, but in all cases we need to use
//         * @RequestPart annotation.
//         * 1. Byte Array ( byte [] )
//         * 2. MultipartFile ( Spring way )
//         * 3. Part ( Java EE way )
//         */
//
//        System.out.println(isFile);
//        System.out.println(myPart.getSubmittedFileName());
//
//        System.out.println("================================");
//
//        /**
//         * It is important to note that you can also use @RequestParam annotation if you need
//         * But with that you can't retrieve the data as a byte array
//         */
//
//        System.out.println(myFile.getOriginalFilename());
//        System.out.println(myPart.getSubmittedFileName());
//
//        try {
//            // Let's get the project location
//            // tomcat/webapps/uploads (files uploaded directory)
//            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
//
//            // Let's create a folder there for uploading purposes, if not exists
//            File uploadsDir = new File(projectPath + "/uploads");
//            uploadsDir.mkdir();
//
//            // It is time to transfer the file into the newly created dir
//            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));
//
//            return new ResponseEntity("Successfully Uploaded", HttpStatus.OK);
//        } catch (URISyntaxException e) {
//            e.printStackTrace();
//            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    //Formalized end-point to upload files using Spring
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity uploadFileWithSpringWay(@RequestPart("myFile") MultipartFile myFile) {
        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));

            //save the path of the uploaded image in the temporary database
            allImages.add("uploads/" + myFile.getOriginalFilename());

            return  ResponseEntity.ok(HttpStatus.OK);
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllImagesFromDatabase() {
        return new ResponseEntity(allImages, HttpStatus.OK);
    }
}
